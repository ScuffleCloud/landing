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
      <img src={tempLogo} alt="GitHub" />
      SCUFFLE
    </div>
    <nav>
      <ul>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a href="/">Homepage</a>
        </li>
        <li aria-current={$page.url.pathname === '/roadmap' ? 'page' : undefined}>
          <a href="/roadmap">Roadmap</a>
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
          <span style="font-weight: 700;">Get a demo</span>
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
    width: 100%;
    margin: 0 auto;
  }

  .corner {
    display: flex;
    gap: 0.5rem;
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
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
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
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 0.1875rem;
    background-color: var(--color-orange500);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
