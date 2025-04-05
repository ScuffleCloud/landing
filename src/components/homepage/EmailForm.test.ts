import { render, screen, waitFor } from '@testing-library/svelte';
import { expect, test, beforeAll, afterAll } from 'vitest';
import TestWrapper from '../TestWrapper.svelte';
import { vi } from 'vitest';

import EmailForm from './EmailForm.svelte';
import userEvent from '@testing-library/user-event';
import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';

// https://developers.cloudflare.com/turnstile/troubleshooting/testing/
// These are not directly tested since here but could be used for a TurnstileOverlay.test.ts
/* 
    mockTurnstileKey: '1x00000000000000000000AA',
    mockBlockedTurnstileKey: '2x00000000000000000000AB',
    mockManagedTurnstileKey: '3x00000000000000000000FF',
*/

const { mockWorkerUrl } = vi.hoisted(() => {
    return {
        mockWorkerUrl: 'https://mock-worker-url.com/',
    };
});

const successMessage = 'Subscribed successfully!';
const blockedMessage = 'Captcha failed';

beforeAll(() => {
    vi.stubEnv('PUBLIC_EMAIL_WORKER_URL', mockWorkerUrl);
});

afterAll(() => {
    vi.unstubAllEnvs();
});

test('submits email and triggers POST request', async () => {
    const mockFetchResponse = {
        ok: true,
        json: async () => ({
            success: true,
            message: successMessage,
            status: 200,
        }),
    };

    const mockFetch = vi.fn().mockResolvedValue(mockFetchResponse);
    vi.stubGlobal('fetch', mockFetch);

    const user = userEvent.setup();
    const mockGetToken = vi
        .fn()
        .mockImplementation(() => new Promise((resolve) => resolve('test-token')));

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
    expect(mockFetch).toHaveBeenCalledTimes(1);
    await waitFor(() => {
        expect(screen.getByText(successMessage)).toBeInTheDocument();
    });
    expect(submitButton).not.toBeDisabled();

    vi.unstubAllEnvs();
});

test('submits email with blocked turnstile key', async () => {
    const mockFetchResponse = {
        ok: true,
        json: async () => ({
            success: true,
            message: successMessage,
            status: 200,
        }),
    };

    const mockFetch = vi.fn().mockResolvedValue(mockFetchResponse);
    vi.stubGlobal('fetch', mockFetch);

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
    expect(mockFetch).toHaveBeenCalledTimes(0);
    expect(mockGetToken).toHaveBeenCalledTimes(1);
    expect(submitButton).not.toBeDisabled();
});

test('submits email with managed turnstile key (interaction required)', async () => {
    const mockFetchResponse = {
        ok: true,
        json: async () => ({
            success: true,
            message: successMessage,
            status: 200,
        }),
    };

    const mockFetch = vi.fn().mockResolvedValue(mockFetchResponse);
    vi.stubGlobal('fetch', mockFetch);

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
    expect(mockFetch).toHaveBeenCalledTimes(0);

    // Button disabled while user interaction deemed necessary on managed turnstile
    expect(submitButton).toBeDisabled();
});
