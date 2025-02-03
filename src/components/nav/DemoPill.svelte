<script>
  import Pill from "$lib/design-components/Pill.svelte";
  import BackButton from "$lib/images/BackButton.svelte";
  import { theme } from "$lib/theme";
</script>

<Pill color={theme.colors.orange500} width="100%">
  <div class="demo-pill-container">
    <p class="demo-text">Get a demo</p>
    <BackButton />
  </div>
</Pill>

<style>
  .demo-pill-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    .demo-text {
      font-weight: 700;
      white-space: nowrap;
    }
  }
</style>
