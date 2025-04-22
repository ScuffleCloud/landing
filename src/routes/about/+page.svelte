<script>
    import AboutContent from '../../components/about/AboutContent.svelte';
</script>

<svelte:head>
    <title>Scuffle - About</title>
</svelte:head>

<div class="page-bg">
    <AboutContent />
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
