<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Homepage/Footer.svelte';
    import { theme } from '$lib/theme';
	import '../app.css';

	let { children } = $props();

    const cssVariables = Object.entries(theme.colors)
        .map(([key, value]) => `--color-${key}: ${value}`)
        .join(';');
</script>

<div class="app" style={cssVariables}>
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		/* padding: 1rem 1rem; */
		min-height: 100vh;
		/* max-width: 1000px; */
		/* margin: 0 auto; */
		background-color: var(--color-light100);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;	
		/* padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto; */
		box-sizing: border-box;
	}
</style>
