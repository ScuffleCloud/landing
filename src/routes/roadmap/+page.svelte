<script lang="ts">
  import Pill from '$lib/design-components/Pill.svelte';
  import roadmap from '$lib/images/roadmap.svg';
  import { theme } from '$lib/theme';
  import backButton from '$lib/images/back-button.svg';
</script>

<div class="page-bg">
  <div class="roadmap-container">
    <img src={roadmap} alt="Scuffle Roadmap" />
    <div class="header-overlay">
      <h1>Scuffle's Roadmap</h1>
      <p>
        Here is an overview of the features we are currently<br />
        developing, along with the progress made so far.<br />
      </p>
      <Pill color={theme.colors.orange500}>
        <p>Detailed Kanban Board</p>
        <img src={backButton} alt="Back" />
      </Pill>
    </div>
  </div>
</div>

<style>
  .page-bg {
    background-color: var(--color-light100);
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;

    .roadmap-container {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        width: 100%;
        height: auto;
        display: block;
      }

      .header-overlay {
        position: absolute;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        top: 24%;

        h1 {
          font-size: clamp(1.5rem, 4.6vw, 3rem);
        }

        p {
          font-size: clamp(0.875rem, 2.3vw, 1.5rem);
        }
      }

      /* TODO: Make this responsive */
      :global(.pill) {
        font-weight: 700;
        height: 3rem;
        gap: 0.25rem;
        white-space: nowrap;

        p {
          font-size: 1rem;
        }
      }
    }
  }
</style>
