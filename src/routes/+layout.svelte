<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Homepage/Footer.svelte';
  import { theme } from '$lib/theme';
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../app.css';

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
</script>

<div class="app" style={cssVariables}>
  <QueryClientProvider client={queryClient}>
    <Navbar />
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
