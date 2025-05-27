<script lang="ts">
    import Navbar from '../components/nav/Navbar.svelte';
    import { theme } from '$lib/theme';
    import { browser } from '$app/environment';
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
    import TurnstileOverlay from '../components/TurnstileOverlay.svelte';
    import { onMount, setContext } from 'svelte';
    import { TURNSTILE_CONTEXT_KEY } from '$lib/design-components/utils';
    import '@fontsource-variable/rubik';
    import { beforeNavigate } from '$app/navigation';
    import { showMobileMenu } from '$lib/layout';
    import '../styles/global.css';
    import Footer from '../components/Footer.svelte';
    import { PUBLIC_WEBSITE_HOSTED_URL, PUBLIC_TWITTER_HANDLE } from '$env/static/public';
    import { MediaQuery } from 'svelte/reactivity';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    const showingMobileMenu = new MediaQuery('min-width: 961px');

    $effect(() => {
        if (showingMobileMenu.current && $showMobileMenu) {
            $showMobileMenu = false;
        }
    });

    onMount(() => {
        AOS.init({
            // Global settings
            duration: 800, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            offset: 120, // offset (in px) from the original trigger point
        });
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

    const metaDescription =
        'Scuffle is an open-source cloud provider focused on high-quality video streaming solutions for both static and real-time video content.';
</script>

<svelte:head>
    <meta name="description" content={metaDescription} />
    <link rel="canonical" href={PUBLIC_WEBSITE_HOSTED_URL} />

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Scuffle" />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:url" content={PUBLIC_WEBSITE_HOSTED_URL} />
    <meta property="og:image" content={PUBLIC_WEBSITE_HOSTED_URL + '/scuffle_logo.svg'} />
    <meta property="og:type" content="website" />

    <!-- Twitter Card Tags-->
    <meta name="twitter:site" content={PUBLIC_TWITTER_HANDLE} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image" content={PUBLIC_WEBSITE_HOSTED_URL + '/scuffle_logo.svg'} />
    <meta name="twitter:description" content={metaDescription} />
</svelte:head>

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
        background: rgba(112, 80, 72, 0.4);
        z-index: 50;
        pointer-events: none;
    }
</style>
