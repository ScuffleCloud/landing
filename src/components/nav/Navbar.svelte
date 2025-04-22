<script lang="ts">
    import { page } from '$app/stores';
    import GithubStats from './GithubStats.svelte';
    import { showMobileMenu } from '$lib/layout';
    import HideOn from '$lib/utility/hide-on.svelte';
    import Dropdown from './Dropdown.svelte';
    import DemoPill from './DemoPill.svelte';
    import MenuButton from '$lib/images/MenuButton.svelte';
    import ScuffleLogo from '$lib/images/ScuffleLogo.svelte';
    import { createQuery } from '@tanstack/svelte-query';
    import { PUBLIC_GITHUB_REPO_ID } from '$env/static/public';
    let pathname = $derived($page?.url?.pathname ?? '/');

    let lastScrollY = 0;
    let hideNav = $state(false);

    const query = createQuery({
        queryKey: ['github-repo-info'],
        queryFn: async () =>
            await fetch(`https://api.github.com/repositories/${PUBLIC_GITHUB_REPO_ID}`).then(
                (res) => res.json(),
            ),
    });

    $effect.root(() => {
        // Avoid race condition on setting state with previous scroll position with timeout
        setTimeout(() => {
            lastScrollY = window.scrollY;
            hideNav = lastScrollY > 50;

            function handleScroll() {
                const currentScrollY = window.scrollY;
                hideNav = currentScrollY > lastScrollY && currentScrollY > 50;
                lastScrollY = currentScrollY;
            }

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
        }, 50);
    });
</script>

<div class="header-container-wrapper" class:hide={hideNav}>
    <div class="header-container">
        <header>
            <a class="logo-container" href="/">
                <div class="logo-container-image">
                    <ScuffleLogo />
                </div>
                scuffle
            </a>
            <HideOn mobileXS mobile tablet>
                <nav>
                    <ul>
                        <li class:active={pathname === '/'}>
                            <a href="/">Homepage</a>
                        </li>
                        <li class:active={pathname.startsWith('/roadmap')}>
                            <a href="/roadmap">Roadmap</a>
                        </li>
                        <li class:active={pathname.startsWith('/about')}>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </HideOn>
            <div class="pill-options-container hide-mobile-xs hide-mobile hide-tablet">
                <GithubStats {query} />
                <DemoPill />
            </div>
            <div class="button-container hide-ds hide-dm hide-dl">
                <div class="pill-options-container hide-mobile hide-mobile-xs">
                    <GithubStats {query} />
                    <DemoPill />
                </div>
                <button onclick={() => ($showMobileMenu = !$showMobileMenu)}>
                    <MenuButton />
                </button>
            </div>
        </header>
        {#if $showMobileMenu}
            <Dropdown {query} />
        {/if}
    </div>
</div>

<style>
    .header-container-wrapper {
        background-color: var(--color-light100);
        position: sticky;
        top: 0;
        z-index: 100;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        opacity: 1;

        &.hide {
            transform: translateY(-100%);
            opacity: 0;
        }

        .header-container {
            background-color: var(--color-light100);
            max-width: calc(var(--layout-width) + 3rem);
            margin: 0 auto;
            padding: 1rem;
            width: 100%;

            header {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin: 0 auto;
                height: 3rem;

                .logo-container {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--brown-800);
                    font-size: 1.5rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    text-decoration: none;

                    .logo-container-image {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        filter: drop-shadow(0px 2px 4px 0px rgb(0, 0, 0, 0.05));
                    }
                }

                nav {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    /* Offset navbar */
                    margin-left: clamp(0rem, calc((100vw - 800px) * 0.2), 4rem);

                    ul {
                        position: relative;
                        padding: 0;
                        margin: 0;
                        height: 3rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        list-style: none;
                        background-size: contain;

                        li {
                            position: relative;
                            display: flex;

                            a {
                                display: flex;
                                height: 100%;
                                align-items: center;
                                font-size: 1rem;
                                font-weight: 500;
                                line-height: 1.5rem;
                                text-transform: capitalize;
                                text-decoration: none;
                                padding: 1rem;
                            }

                            &.active {
                                a {
                                    font-weight: 600;
                                }
                            }
                        }

                        .active::before {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            border-radius: 0.5625rem;
                            width: 1.5rem;
                            height: 0.25rem;
                            background-color: var(--color-orange500);
                        }
                    }
                }
            }
        }
    }

    .pill-options-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .button-container {
        display: flex;
        align-items: center;
        gap: 3rem;

        button {
            border: none;
            cursor: pointer;
            display: flex;
            padding: 0;
            justify-content: center;
            align-items: center;
        }
    }
</style>
