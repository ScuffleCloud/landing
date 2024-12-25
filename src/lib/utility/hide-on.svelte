<script lang="ts">
  import type { Snippet } from 'svelte';

  type HideOnProps = {
    mobile?: boolean;
    desktop?: boolean;
    children: Snippet;
  };

  let { mobile = false, desktop = false, children }: HideOnProps = $props();

  const className = ['hide-on', { 'hide-on-mobile': mobile, 'hide-on-desktop': desktop }];
</script>

<div class={className}>
  {@render children()}
</div>

<style>
  .hide-on {
    display: contents;
  }
</style>
