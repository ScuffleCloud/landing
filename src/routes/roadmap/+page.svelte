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
</div>
<BearAnimation />

<style>
    .page-bg {
        background-color: var(--color-light100);
        max-width: var(--layout-width);
        margin: 0 auto;
        width: 100%;
    }
</style>
