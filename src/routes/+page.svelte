<script lang="ts">
    import Hero from '../components/homepage/Hero.svelte';
    import EmailForm from '../components/homepage/EmailForm.svelte';
    import About from '../components/homepage/About.svelte';
    import Features from '../components/homepage/Features.svelte';
</script>

<svelte:head>
    <title>Scuffle</title>
</svelte:head>
<div class="hero-section-bg">
    <Hero />
    <EmailForm />
    <About />
</div>

<div class="features-bg">
    <div class="features-container">
        <Features />
    </div>
</div>

<style>
    .hero-section-bg {
        position: relative;
        background-color: var(--color-light100);
        max-width: var(--layout-width);
        margin: 0 auto;
        padding: 2.5rem;
    }

    .features-bg {
        background-color: var(--color-brown700);

        .features-container {
            display: flex;
            flex-direction: column;
            gap: 8rem;
            color: var(--color-light100);
            max-width: var(--layout-width);
            margin: 0 auto;

            padding: 4rem 2.5rem;
        }
    }
</style>
