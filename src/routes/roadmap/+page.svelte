<script lang="ts">
    import Timeline from '../../components/roadmap/Roadmap.svelte';
    import BearAnimation from '../../components/roadmap/BearAnimation.svelte';
    import Hero from '../../components/roadmap/Hero.svelte';
</script>

<svelte:head>
    <title>Scuffle - Roadmap</title>
</svelte:head>
<div class="page-bg">
    <Hero />
    <Timeline />
    <BearAnimation />
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
