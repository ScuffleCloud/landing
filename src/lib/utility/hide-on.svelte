<script lang="ts">
  import type { Snippet } from 'svelte';

  type HideOnProps = {
    mobile?: boolean;
    desktop?: boolean;
    children: Snippet;
  };

  let { mobile = false, desktop = false, children }: HideOnProps = $props();
</script>

<div class="hide-on" class:hide-on-mobile={mobile} class:hide-on-desktop={desktop}>
  {@render children()}
</div>

<style>
  .hide-on {
    display: contents;
  }
</style>
