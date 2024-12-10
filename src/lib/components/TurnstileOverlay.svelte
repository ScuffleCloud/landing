<!-- For testing https://developers.cloudflare.com/turnstile/troubleshooting/testing/ -->

<script lang="ts">
  import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
  import { Turnstile } from 'svelte-turnstile';

  let showTurnstileOverlay = false;
  let reset: () => void;
  let token: string | undefined = undefined;

  let handleTurnstileCallback = (event: CustomEvent) => {
    token = event.detail.token;
  };

  export const resetTurnstile = () => {
    reset();
  };

  export const getToken = async (): Promise<string> => {
    return new Promise((resolve) => {
      if (token) {
        resolve(token);
        return;
      }
      showTurnstileOverlay = true;

      // Otherwise wait for token to be set and resolve
      const originalCallback = handleTurnstileCallback;
      handleTurnstileCallback = (event: CustomEvent) => {
        // Sets token
        originalCallback(event);
        resolve(event.detail.token);

        // Reset callback
        handleTurnstileCallback = originalCallback;
      };
    });
  };
</script>

<div class="overlay" class:hidden={!showTurnstileOverlay} data-testid="turnstile-overlay">
  <div class="turnstile-box">
    <p>One more step before you proceed...</p>
    <div class="turnstile-container">
      <Turnstile
        siteKey={PUBLIC_TURNSTILE_SITE_KEY}
        on:callback={handleTurnstileCallback}
        on:after-interactive={() => {
          showTurnstileOverlay = false;
        }}
        bind:reset
      />
    </div>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 100;

    & p {
      color: white;
      text-align: center;
      margin-bottom: 1rem;
      margin-top: 40vh;
    }

    & .turnstile-container {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
    }
  }

  .hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
