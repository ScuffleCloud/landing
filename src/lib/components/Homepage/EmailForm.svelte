<script lang="ts">
  import Pill from '$lib/design-components/Pill.svelte';
  import { theme } from '$lib/theme';
</script>

<div class="rectangle">
  <div class="update-banner">
    <div class="update-banner-container">
      <p class="title">Receive an Update when we&apos;ll go live!</p>
      <p class="subtitle">News from the Scuffle Engineering Team</p>
    </div>
    <div class="entry-field-container">
      <input class="entry-field" placeholder="Your email address" type="email" />
      <Pill color={theme.colors.brown600}>
        <p class="button-text">Subscribe</p>
      </Pill>
    </div>
  </div>
</div>

<style>
  .rectangle {
    position: relative;
    display: flex;
    align-items: center;
    padding: 3rem;
    border-radius: 1rem;
    background-color: var(--color-orange500);
  }

  .update-banner {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    border-radius: 1rem;
    gap: 1rem;
    height: 100%;
    width: 100%;
    max-width: 25rem;
    background-color: var(--color-peach600);
  }

  .update-banner-container {
    padding: 0 0.5rem;
  }

  .title {
    color: var(--color-brown800);
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 0;
  }

  .subtitle {
    color: var(--color-brown600);
    line-height: 1.5;
    margin: 0;
  }

  .button-text {
    color: var(--color-light100);
    font-weight: bold;
    margin: 0;
  }

  .entry-field-container {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .entry-field {
    padding: 0.75rem 1rem;
    border-radius: 100rem;
    border: 1px solid #ffdbb9;
    width: 100%;
    outline: none;
    transition: all 0.2s ease;
    background-color: inherit;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }
</style>
