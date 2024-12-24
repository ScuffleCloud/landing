<script lang="ts">
  import youShouldContribute from '$lib/images/you-should-contribute.svg';
</script>

<div class="hero-section-header">
  <div class="hero-section">
    <h1 class="hero-section-title-1">Scuffle.</h1>
    <h1 class="hero-section-title-2">
      new up-and-coming.<br />
      open source.<br />
      cloud provider.
    </h1>
  </div>
  <div class="header-bubble-container">
    <img src={youShouldContribute} alt="You should contribute!" />
  </div>
</div>

<style>
  .hero-section-header {
    position: relative;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 6rem 0;

    .hero-section {
      display: flex;
      flex-direction: column;

      h1 {
        color: var(--brown-800, #201617);
        font-size: 4rem;
        line-height: normal;
      }

      .hero-section-title-1 {
        font-weight: 700;
      }

      .hero-section-title-2 {
        font-weight: 400;
      }
    }

    .header-bubble-container {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
