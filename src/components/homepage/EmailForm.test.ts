import { render, screen, waitFor } from '@testing-library/svelte';
import { expect, test, beforeAll, afterAll, afterEach } from 'vitest';
import TestWrapper from '../TestWrapper.svelte';
import { vi } from 'vitest';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import EmailForm from './EmailForm.svelte';
import userEvent from '@testing-library/user-event';
import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';

// https://developers.cloudflare.com/turnstile/troubleshooting/testing/
const { mockWorkerUrl, mockTurnstileKey, mockBlockedTurnstileKey, mockManagedTurnstileKey } =
  vi.hoisted(() => {
    return {
      mockWorkerUrl: 'https://mock-worker-url.com/',
      mockTurnstileKey: '1x00000000000000000000AA',
      mockBlockedTurnstileKey: '2x00000000000000000000AB',
      mockManagedTurnstileKey: '3x00000000000000000000FF',
    };
  });

vi.mock('$env/static/public', () => ({
  PUBLIC_EMAIL_WORKER_URL: mockWorkerUrl,
  PUBLIC_TURNSTILE_SITE_KEY: mockTurnstileKey,
}));

const successMessage = 'Subscribed successfully!';
const blockedMessage = 'Captcha failed';

// Create mock server for api calls
const server = setupServer(
  http.post(mockWorkerUrl, async () => {
    return HttpResponse.json({ success: true, message: successMessage, status: 200 });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('submits email and triggers POST request', async () => {
  const user = userEvent.setup();
  const mockGetToken = vi.fn().mockResolvedValue('test-token');

  let isRequestFired = false;
  server.events.on('request:start', ({ request }) => {
    if (request.url === mockWorkerUrl && request.method === 'POST') {
      isRequestFired = true;
    }
  });

  render(TestWrapper, {
    props: {
      children: EmailForm,
    },
    context: new Map([
      [
        TURNSTILE_CONTEXT_KEY,
        {
          getToken: mockGetToken,
        },
      ],
    ]),
  });

  const emailInput = screen.getByTestId('email-input-field');
  const submitButton = screen.getByTestId('submit-button');

  await user.type(emailInput, 'test@example.com');
  await user.click(submitButton);
  expect(mockGetToken).toHaveBeenCalledTimes(1);
  await waitFor(() => {
    expect(screen.getByText(successMessage)).toBeInTheDocument();
  });
  expect(submitButton).not.toBeDisabled();
  expect(isRequestFired).toBe(true);
});

test('submits email with blocked turnstile key', async () => {
  // Override the environment variable for this test
  vi.mock('$env/static/public', () => ({
    PUBLIC_EMAIL_WORKER_URL: mockWorkerUrl,
    PUBLIC_TURNSTILE_SITE_KEY: mockBlockedTurnstileKey,
  }));

  let isRequestFired = false;
  server.events.on('request:start', ({ request }) => {
    if (request.url === mockWorkerUrl && request.method === 'POST') {
      isRequestFired = true;
    }
  });

  const user = userEvent.setup();
  const mockGetToken = vi.fn().mockImplementation(
    () =>
      new Promise((_, reject) =>
        reject({
          message: blockedMessage,
          wasCaptcha: true,
        }),
      ),
  );

  render(TestWrapper, {
    props: { children: EmailForm },
    context: new Map([[TURNSTILE_CONTEXT_KEY, { getToken: mockGetToken }]]),
  });

  const emailInput = screen.getByTestId('email-input-field');
  const submitButton = screen.getByTestId('submit-button');

  await user.type(emailInput, 'test@example.com');
  await user.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText(blockedMessage)).toBeInTheDocument();
  });

  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(isRequestFired).toBe(false);
  expect(submitButton).not.toBeDisabled();
});

test('submits email with managed turnstile key (interaction required)', async () => {
  // Override the environment variable for this test
  vi.mock('$env/static/public', () => ({
    PUBLIC_EMAIL_WORKER_URL: mockWorkerUrl,
    PUBLIC_TURNSTILE_SITE_KEY: mockManagedTurnstileKey,
  }));

  let isRequestFired = false;
  server.events.on('request:start', ({ request }) => {
    if (request.url === mockWorkerUrl && request.method === 'POST') {
      isRequestFired = true;
    }
  });

  const user = userEvent.setup();
  // Mock never resolves promise as awaiting user interaction on turnstile component
  const mockGetToken = vi.fn().mockImplementation(() => new Promise(() => {}));

  render(TestWrapper, {
    props: { children: EmailForm },
    context: new Map([[TURNSTILE_CONTEXT_KEY, { getToken: mockGetToken }]]),
  });

  const emailInput = screen.getByTestId('email-input-field');
  const submitButton = screen.getByTestId('submit-button');

  await user.type(emailInput, 'test@example.com');
  await user.click(submitButton);

  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(isRequestFired).toBe(false);

  // Button disabled while user interaction deemed necessary on managed turnstile
  expect(submitButton).toBeDisabled();
});
