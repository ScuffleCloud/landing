<script lang="ts">
    import type { Contributor, Streamed } from '$lib/types';
    import AboutContent from '../../components/about/AboutContent.svelte';

    type Props = {
        data: {
            contributors: Streamed<Contributor[]>;
        };
    };

    const { data: pageData }: Props = $props();
</script>

<svelte:head>
    <title>Scuffle - About</title>
</svelte:head>

<div class="page-bg">
    <AboutContent streamedData={pageData.contributors} />
</div>

<style>
    .page-bg {
        background-color: var(--color-light100);
        max-width: var(--layout-width);
        margin: 0 auto;
        padding: 2.5rem;
        width: 100%;

        @media (max-width: 592px) {
            padding: 1.25rem;
        }
    }
</style>
