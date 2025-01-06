<script>
  import Pill from '$lib/design-components/Pill.svelte';
  import backButton from '$lib/images/back-button.svg';
  import { theme } from '$lib/theme';
</script>

<Pill color={theme.colors.orange500} width="100%">
  <div class="demo-pill-container">
    <p class="demo-text">Get a demo</p>
    <img src={backButton} alt="Back" />
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
