import { render, screen, waitFor } from '@testing-library/svelte';
import { expect, test, beforeAll, afterAll, afterEach } from 'vitest';
import TestWrapper from './TestWrapper.svelte';
import { vi } from 'vitest';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import EmailForm from './EmailForm.svelte';
import userEvent from '@testing-library/user-event';
import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';

const { mockWorkerUrl, mockTurnstileKey } = vi.hoisted(() => {
  return {
    mockWorkerUrl: 'https://mock-worker-url.com',
    mockTurnstileKey: '1x00000000000000000000AA',
  };
});

vi.mock('$env/static/public', () => ({
  PUBLIC_EMAIL_WORKER_URL: mockWorkerUrl,
  PUBLIC_TURNSTILE_SITE_KEY: mockTurnstileKey,
}));

const successMessage = 'Subscribed successfully!';

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
  await waitFor(() => {
    expect(screen.getByText(successMessage)).toBeInTheDocument();
  });

  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(submitButton).not.toBeDisabled();
});
