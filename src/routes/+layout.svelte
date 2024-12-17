<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Homepage/Footer.svelte';
  import { theme } from '$lib/theme';
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../app.css';
  import TurnstileOverlay from '$lib/components/TurnstileOverlay.svelte';
  import { setContext } from 'svelte';
  import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';
  import '@fontsource-variable/archivo';

  let { children } = $props();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
  const cssVariables = Object.entries(theme.colors)
    .map(([key, value]) => `--color-${key}: ${value}`)
    .join(';');

  let turnstileOverlayComponent: TurnstileOverlay | null = null;
  setContext(TURNSTILE_CONTEXT_KEY, {
    getToken: async () => await turnstileOverlayComponent?.getToken(),
  });
</script>

<div class="app" style={cssVariables}>
  <QueryClientProvider client={queryClient}>
    <Navbar />
    <TurnstileOverlay bind:this={turnstileOverlayComponent} />
    <main>
      {@render children()}
    </main>

    <Footer />
  </QueryClientProvider>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-light100);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
