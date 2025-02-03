<script lang="ts">
  import type { Snippet } from "svelte";

  type HideOnProps = {
    mobile?: boolean;
    tablet?: boolean;
    ds?: boolean;
    dm?: boolean;
    dl?: boolean;
    children: Snippet;
  };

  let {
    mobile = false,
    tablet = false,
    ds = false,
    dm = false,
    dl = false,
    children,
  }: HideOnProps = $props();

  const className = [
    "hide-on",
    {
      "hide-mobile": mobile,
      "hide-tablet": tablet,
      "hide-ds": ds,
      "hide-dm": dm,
      "hide-dl": dl,
    },
  ];
</script>

<div class={className}>
  {@render children()}
</div>

<style>
  .hide-on {
    display: contents;
  }
</style>
