<script>
  import Flex from '$lib/design-components/Flex.svelte';
  import Pill from '$lib/design-components/Pill.svelte';
  import backButton from '$lib/images/back-button.svg';
  import { theme } from '$lib/theme';
</script>

<Pill color={theme.colors.orange500} width="100%">
  <Flex direction="row" alignItems="center" gap={1}>
    <p class="demo-text">Get a demo</p>
    <img src={backButton} alt="Back" />
  </Flex>
</Pill>

<style>
  .demo-text {
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    white-space: nowrap;
  }
</style>
