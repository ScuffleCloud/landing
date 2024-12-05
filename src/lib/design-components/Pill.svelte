<script lang="ts">
  import type { ThemeColors } from '$lib/theme';
  import type { Snippet } from 'svelte';
  import { getColor } from './utils';

  interface PillProps {
    children: Snippet;
    color: ThemeColors | string;
    borderColor?: ThemeColors | string;
  }

  let { children, color, borderColor = 'inherit' }: PillProps = $props();
</script>

<div
  class="pill"
  style:--pill-background={getColor(color)}
  style:--pill-border-color={getColor(borderColor)}
>
  {@render children()}
</div>

<style>
  .pill {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 1rem;
    border-radius: 50rem;
    width: fit-content;
    cursor: pointer;
    background-color: var(--pill-background);
    border: 1px solid var(--pill-border-color);
  }
</style>
