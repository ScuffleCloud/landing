<script lang="ts">
	import { page } from '$app/stores';
    import GithubStats from './GithubStats.svelte';
	import Pill from '$lib/design-components/Pill.svelte';
    import tempLogo from '$lib/images/temp-logo.svg';
    import { theme } from '$lib/theme';
	import backButton from '$lib/images/back-button.svg';
    import Flex from '$lib/design-components/Flex.svelte';
</script>

<div class="header-container">
	<header>
		<div class="corner">
			test123
			<img src={tempLogo} alt="GitHub" />
		</div>

		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/testpage2' ? 'page' : undefined}>
					<a href="/testpage2">testpage2</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
					<a href="/about">about</a>
				</li>
			</ul>
		</nav>
		<Flex direction="row" gap={2}>
			<GithubStats />
			<Pill color={theme.colors.orange500}>
				<Flex direction="row" alignItems="center" gap={1}>
					Get a demo
					<img src={backButton} alt="Back" />
				</Flex>
			</Pill>
		</Flex>
	</header>
</div>

<style>
	.header-container {
		background-color: var(--color-light100);
		max-width: 64rem;
        margin: 0 auto;
        padding: 1rem;
        width: 100%;
	}

	header {
		display: flex;
		justify-content: space-between;
		max-width: 1000px;
		width: 100%;
		margin: 0 auto;
	}

	.corner {
		height: 3em;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
	}

	nav { 
        flex-grow: 1; /* Allow nav to grow and take available space */
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	/* Active page indicator */
	li[aria-current='page']::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;          /* Center the line */
        transform: translateX(-50%);  /* Offset by half its width for true centering */
        width: 60%;         /* Adjust this value to make it wider/narrower */
        height: 3px;
        background-color: var(--color-orange500);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
