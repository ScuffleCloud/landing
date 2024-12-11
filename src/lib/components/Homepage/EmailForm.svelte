<script lang="ts">
  import Pill from '$lib/design-components/Pill.svelte';
  import { theme } from '$lib/theme';
  import { createMutation } from '@tanstack/svelte-query';
  import { LoaderCircle } from 'lucide-svelte';
  import { PUBLIC_EMAIL_WORKER_URL } from '$env/static/public';
  import { getContext } from 'svelte';
  import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';
  import type { TurnstileError } from '../types';

  let email = '';
  let isLoading = false;
  let emailStatusMessage = '';

  type MutationParams = {
    email: string;
  };

  const { getToken } = getContext<{
    getToken: () => Promise<string>;
  }>(TURNSTILE_CONTEXT_KEY);

  const mutate = createMutation({
    mutationFn: async ({ email }: MutationParams) => {
      const token = await getToken();

      const response = await fetch(PUBLIC_EMAIL_WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email, 'cf-turnstile-response': token }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      return true;
    },
    onMutate: () => {
      isLoading = true;
    },
    onSuccess: () => {
      emailStatusMessage = 'Subscribed successfully!';
    },
    onError: (error: TurnstileError) => {
      // Check if error is captcha error or not
      emailStatusMessage = 'There was an error subscribing. Please try again.';
      if (error.wasCaptcha) {
        emailStatusMessage = error.message;
      }
    },
    onSettled: () => {
      isLoading = false;
    },
  });

  const handleSubmit = async ({ email }: { email: string }) => {
    if (!email) {
      emailStatusMessage = 'Please enter a valid email address.';
      return;
    }
    $mutate.mutate({ email });
  };
</script>

<div class="rectangle">
  <div class="update-banner">
    <div class="update-banner-container">
      <p class="title">Receive an Update when we&apos;ll go live!</p>
      <p class="subtitle">News from the Scuffle Engineering Team</p>
    </div>
    <form
      class="entry-field-container"
      onsubmit={(e) => {
        e.preventDefault();
        handleSubmit({ email });
      }}
    >
      <input
        class="entry-field"
        placeholder="Your email address"
        type="email"
        bind:value={email}
        required
        aria-label="Email address"
        data-testid="email-input-field"
      />
      <Pill
        color={theme.colors.brown600}
        as="button"
        disabled={isLoading}
        type="submit"
        dataTestId="submit-button"
      >
        <p class="button-text" style="opacity: {isLoading ? 0 : 1}">Subscribe</p>
        {#if isLoading}
          <div class="loader-container">
            <LoaderCircle class="animate-spin loader" size={24} color={theme.colors.white} />
          </div>
        {/if}
      </Pill>
    </form>
    {#if emailStatusMessage}
      <p class="input-status-text" id="email-status">
        {emailStatusMessage}
      </p>
    {/if}
  </div>
</div>

<style>
  .rectangle {
    position: relative;
    display: flex;
    align-items: center;
    padding: 3rem;
    border-radius: 1rem;
    background-color: var(--color-orange500);
  }

  .update-banner {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    border-radius: 1rem;
    gap: 1rem;
    height: 100%;
    width: 100%;
    max-width: 25rem;
    background-color: var(--color-peach600);
  }

  .update-banner-container {
    padding: 0 0.5rem;
  }

  .title {
    color: var(--color-brown800);
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 0;
  }

  .subtitle {
    color: var(--color-brown600);
    line-height: 1.5;
    margin: 0;
  }

  .button-text {
    color: var(--color-light100);
    font-weight: bold;
    margin: 0;
  }

  :global(.animate-spin) {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .entry-field-container {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    & .loader-container {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .entry-field {
    padding: 0.75rem 1rem;
    border-radius: 100rem;
    border: 1px solid #ffdbb9;
    width: 100%;
    outline: none;
    transition: all 0.2s ease;
    background-color: inherit;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .input-status-text {
    margin-left: 0.75rem;
    font-size: 0.75rem;
    line-height: 1;
    color: var(--color-brown600);
  }
</style>
