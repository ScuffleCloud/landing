<script lang="ts">
    import { page } from '$app/stores';
    import GithubStats from './GithubStats.svelte';
    import DemoPill from './DemoPill.svelte';
    import HideOn from '$lib/utility/hide-on.svelte';

    let pathname = $derived($page?.url?.pathname ?? '/');
</script>

<div class="mobile-menu">
    <ul>
        <li>
            <a href="/" class:active={pathname === '/'}> Homepage </a>
        </li>
        <li>
            <a href="/roadmap" class:active={pathname.startsWith('/roadmap')}> Roadmap </a>
        </li>
        <li>
            <a href="/about" class:active={pathname.startsWith('/about')}> About </a>
        </li>
    </ul>
    <HideOn tablet ds dm dl>
        <div class="stats-container">
            <div class="stats-container-item">
                <GithubStats />
            </div>
            <div class="stats-container-item">
                <DemoPill />
            </div>
        </div>
    </HideOn>
</div>

<style>
    .mobile-menu {
        position: absolute;
        background: var(--color-light100);
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        width: 100%;
        left: 0;
        right: 0;

        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 0.5rem;

            li {
                a {
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: var(--color-brown700);
                    text-decoration: none;
                    font-weight: 500;
                    line-height: 1.5rem;

                    &.active {
                        font-weight: 600;
                    }
                }
            }
        }

        .stats-container {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1.5rem;
            padding: 1.5rem 0.5rem 1.5rem 0.5rem;

            .stats-container-item {
                flex: 1;
                min-width: 6.25rem;
            }
        }
    }
</style>
