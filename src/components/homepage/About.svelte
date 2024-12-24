<script lang="ts">
  import scuffleBear from '$lib/images/scuffle-bear.svg';
  import accentAddon from '$lib/images/addons-accent.svg';
  import heartsAddon from '$lib/images/addons-hearts.svg';
</script>

<div class="scuffle-about-container">
  <div class="content-1">
    <img src={scuffleBear} alt="Scuffle Bear" />
  </div>
  <div class="content-2">
    <img src={accentAddon} alt="Addons" />
    <h3 style="white-space: nowrap;">What is Scuffle?</h3>
    <div class="bear-text-container">
      <p class="bear-text-1">Scuffle is an ambitious, upcoming open-source cloud provider.</p>
      <p class="bear-text-2">
        Our initial focus is on delivering high-quality video streaming solutions for both static
        and real-time video content.
      </p>
    </div>
  </div>
  <div class="content-3">
    <h3>
      Open Source - Community driven vision
      <img src={heartsAddon} alt="Addons" />
    </h3>
    <p class="bear-text-1">
      Scuffle aims to be a community-driven platform, built from the ground up with transparency and
      openness in mind. Licensed under AGPL3, Apache 2.0, and MIT*.
    </p>
    <p class="underlined-text">Learn more</p>
  </div>
</div>

<style>
  .scuffle-about-container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 4rem;
    column-gap: 4rem;
    width: 100%;
    margin: 7rem 0;
    padding: 0 2rem;
    box-sizing: border-box;
    z-index: 1;

    .content-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: 1 / 1 / 3 / 2;

      img {
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 1rem;
      }
    }

    .content-2 {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .content-3 {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      row-gap: 2rem;
      column-gap: 0.5rem;
      grid-template-columns: 40% 1fr;
      padding: 0 1rem;

      .content-1 {
        grid-area: 1 / 2 / 2 / 3;
        img {
          padding: 0 clamp(0rem, max(0rem, 7vw - 2rem), 6rem);
        }
      }
      .content-2 {
        grid-area: 1 / 1 / 2 / 2;
      }
      .content-3 {
        grid-area: 2 / 1 / 3 / 3;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .bear-text-1 {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.75rem;
    }

    .bear-text-2 {
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.75rem;
    }

    .content-2 {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      img {
        position: absolute;
        top: -18px;
        left: -25px;
        z-index: 1;
      }

      .bear-text-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    .content-3 {
      h3 {
        position: relative;
        z-index: 2;
        display: inline;
        img {
          position: absolute;
          top: -18px;
          right: 0;
          z-index: -1;
        }
      }

      .underlined-text {
        text-decoration: underline;
        font-weight: 600;
        padding: 1rem 0rem;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1rem;
      }
    }
  }
</style>
