<script lang="ts">
  import Pill from '$lib/design-components/Pill.svelte';
  import roadmap from '$lib/images/roadmap.svg';
  import { theme } from '$lib/theme';
  import backButton from '$lib/images/back-button.svg';
  import RoadmapTimeline from '$lib/components/RoadmapTimeline.svelte';
  import botToLaunch from '$lib/images/bot-to-launch.svg';
</script>

<div class="page-bg">
  <div class="roadmap-header-container">
    <img src={roadmap} alt="Scuffle Roadmap" />
    <div class="header-overlay">
      <div class="header-overlay-content">
        <h1>Scuffle's Roadmap</h1>
        <p>
          Here is an overview of the features we are currently<br />
          developing, along with the progress made so far.<br />
        </p>
      </div>
      <a href="https://jira.scuffle.cloud/" class="pill-link">
        <Pill color={theme.colors.orange500}>
          <p>Detailed Kanban Board</p>
          <img src={backButton} alt="Back" />
        </Pill>
      </a>
    </div>
  </div>
  <RoadmapTimeline />
  <!-- Now everytime i click this image. i want it to rise in the air -->
  <img src={botToLaunch} alt="launch-bot" />
</div>

<style>
  .page-bg {
    background-color: var(--color-light100);
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;

    .roadmap-header-container {
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
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        top: 24%;
        gap: 1.5rem;

        .header-overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;

          h1 {
            font-size: clamp(1.5rem, 4.6vw, 4rem);
          }

          p {
            font-size: clamp(0.75rem, 2.3vw, 1.5rem);
            line-height: clamp(1.2rem, 3.7vw, 2rem);
            font-weight: 400;
          }
        }

        /* TODO: Touch up clamp values when font-sizes and other designs are finalized */
        :global(.pill) {
          font-weight: 700;
          height: clamp(2rem, 6vw, 3rem);
          gap: 0.25rem;
          white-space: nowrap;
          padding: 0 clamp(0.75rem, 2vw, 1rem);

          img {
            width: clamp(1rem, 3vw, 1.5rem);
            height: auto;
          }

          p {
            font-size: clamp(0.75rem, 2.3vw, 1rem);
          }
        }

        .pill-link {
          text-decoration: none;
        }
      }
    }
  }
</style>
