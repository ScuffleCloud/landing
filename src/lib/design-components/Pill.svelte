<script lang="ts">
  import type { ThemeColors } from '$lib/theme';
  import type { Snippet } from 'svelte';
  import { getColor } from './utils';

  interface PillProps {
    children: Snippet;
    color: ThemeColors | string;
    borderColor?: ThemeColors | string;
    as?: 'button' | 'div';
    onClick?: () => void;
    class?: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
    dataTestId?: string;
  }

  let {
    children,
    color,
    borderColor = 'inherit',
    as = 'div',
    onClick,
    class: className = '',
    disabled = false,
    type = 'button',
    dataTestId,
  }: PillProps = $props();
</script>

<svelte:element
  this={as}
  class="pill ${className}"
  style:--pill-background={getColor(color)}
  style:--pill-border-color={getColor(borderColor)}
  onclick={onClick}
  {disabled}
  role={as === 'button' ? 'button' : 'div'}
  {type}
  data-testid={dataTestId}
>
  {@render children()}
</svelte:element>

<style>
  .pill {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    border-radius: 50rem;
    width: fit-content;
    cursor: pointer;
    background-color: var(--pill-background);
    border: 1px solid var(--pill-border-color);
  }
</style>
