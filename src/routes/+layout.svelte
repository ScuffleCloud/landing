<script lang="ts">
    import Navbar from '../components/nav/Navbar.svelte';
    import { theme } from '$lib/theme';
    import { browser } from '$app/environment';
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
    import TurnstileOverlay from '../components/TurnstileOverlay.svelte';
    import { setContext } from 'svelte';
    import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';
    import '@fontsource-variable/archivo';
    import { beforeNavigate } from '$app/navigation';
    import { showMobileMenu } from '$lib/layout';
    import '../styles/global.css';
    import Footer from '../components/Footer.svelte';

    import { MediaQuery } from 'svelte/reactivity';

    const showingMobileMenu = new MediaQuery('min-width: 961px');

    $effect(() => {
        if (showingMobileMenu.current && $showMobileMenu) {
            $showMobileMenu = false;
        }
    });

    const { children } = $props();
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

    beforeNavigate((nav) => {
        // Hide menu on navigate
        nav.complete.then(() => {
            $showMobileMenu = false;
        });
    });
</script>

<div class="app" style={cssVariables}>
    <QueryClientProvider client={queryClient}>
        <Navbar />
        <TurnstileOverlay bind:this={turnstileOverlayComponent} />
        {#if $showMobileMenu}
            <div class="overlay"></div>
        {/if}
        <main>
            {@render children()}
        </main>
        <Footer />
    </QueryClientProvider>
</div>

<style>
    .app {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--color-light100);
    }

    main {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 50;
        pointer-events: none;
    }
</style>
