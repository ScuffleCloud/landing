<script lang="ts">
    import { PUBLIC_GITHUB_REPO_ID, PUBLIC_GITHUB_REPO_URL } from '$env/static/public';
    import Pill from '$lib/design-components/Pill.svelte';
    import HideOn from '$lib/utility/hide-on.svelte';
    import GithubIcon from '$lib/images/GithubIcon.svelte';
    import { createQuery } from '@tanstack/svelte-query';

    const query = createQuery({
        queryKey: ['stargazers-count'],
        queryFn: async () =>
            await fetch(`https://api.github.com/repositories/${PUBLIC_GITHUB_REPO_ID}`).then(
                (res) => res.json(),
            ),
    });
</script>

<a href={PUBLIC_GITHUB_REPO_URL} class="pill-link">
    <Pill color="white" borderColor="#EAE2DF" width="100%">
        <div class="pill-content">
            <HideOn mobileXS tablet ds dm>
                <p class="pill-text">Contribute</p>
                <div class="divider"></div>
            </HideOn>
            <GithubIcon size={1.35} />
            {#if !$query.data}
                <p class="loading">---</p>
            {:else}
                <p class="pill-text">{$query.data.stargazers_count}</p>
            {/if}
        </div>
    </Pill>
</a>

<style>
    .pill-link {
        text-decoration: none;
        width: 100%;

        .pill-content {
            display: flex;
            align-items: center;
            gap: 0.55rem;

            .pill-text {
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.5rem;
            }

            .divider {
                width: 0.125rem;
                height: 1.25rem;
                background-color: var(--color-light100);
                border-radius: 0.6875rem;
            }

            .loading {
                opacity: 0.3;
                white-space: nowrap;
            }
        }
    }
</style>
