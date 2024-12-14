<script lang="ts">
  import Pill from '$lib/design-components/Pill.svelte';
  import roadmap from '$lib/images/roadmap.svg';
  import { theme } from '$lib/theme';
  import backButton from '$lib/images/back-button.svg';
  import RoadmapTimeline from '$lib/components/RoadmapTimeline.svelte';
  import { spring } from 'svelte/motion';
  import anime from 'animejs/lib/anime.es.js';
  import { tick } from 'svelte';

  let animatedObject: SVGElement;
  let motionPath: SVGPathElement;
  let balloonPath: SVGPathElement;

  let scrollComplete = false;
  let pathData = $state('');
  let isAnimating = $state(false);

  function fadeIntoViewPostAnimation() {
    anime({
      targets: animatedObject,
      opacity: [0, 1],
      duration: 400,
      easing: 'easeInQuad',
    });
  }

  function startAnimation() {
    const startScrollY = window.scrollY;
    const endPoint = -1 * (window.innerHeight + window.scrollY);
    isAnimating = true;
    // Path relatively winding up screen
    pathData = `M 0 0 C 20 ${endPoint / 6} -20 ${endPoint / 3} 0 ${endPoint}`;

    // Tick to wait for path state update depending on user screen size
    tick().then(() => {
      const animation = anime.timeline({
        complete: (anim) => {
          scrollComplete = false;
          anim.seek(0);
          isAnimating = false;
        },
        changeComplete: () => {
          fadeIntoViewPostAnimation();
        },
      });

      animation
        .add({
          opacity: {
            value: [0, 1],
            duration: 100,
          },
          targets: balloonPath,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutCubic',
          duration: 2000,
        })
        .add({
          targets: animatedObject,
          translateX: anime.path(motionPath)('x'),
          translateY: anime.path(motionPath)('y'),
          duration: 5000,
          easing: 'easeOutQuad',
          // Use update method instead of scroll delay lib so it's smoother (scrolling update rate equalling animation rate)
          update: function (anim) {
            if (scrollComplete) return;
            if (window.scrollY <= 0) {
              scrollComplete = true;
              return;
            }

            const progress = anim.progress / 100;
            const scrollProgress = Math.max(0, 1 - progress * 6); // minus/add to 6 for faster scroll
            const targetScroll = startScrollY * scrollProgress;

            window.scrollTo({
              top: targetScroll,
              behavior: 'auto',
            });
          },
        });
    });
  }

  // Spring animation on hover
  const yPosition = spring(0, {
    stiffness: 0.2,
    damping: 0.4,
  });

  function handleMouseEnter() {
    if (isAnimating) return;
    $yPosition = -5;
  }

  function handleMouseLeave() {
    if (isAnimating) return;
    $yPosition = 0;
  }
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
  <div class="animation-container">
    <Pill
      color={theme.colors.orange500}
      as="button"
      onClick={startAnimation}
      disabled={isAnimating}
    >
      <p>Go Back</p>
      <img src={backButton} alt="Back" style="transform: rotate(-90deg);" />
    </Pill>
    <div class="flying-object-container">
      <svg
        bind:this={animatedObject}
        width="300"
        height="300"
        viewBox="-500 -500 1500 2000"
        style="transform: translateY({$yPosition}px);"
        onmouseenter={handleMouseEnter}
        onmouseleave={handleMouseLeave}
        class="flying-svg"
        role="img"
        aria-label="Animated launch button"
      >
        <!-- Replace with item to fly -->
        <path
          d="m832 928v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z"
          fill="none"
          stroke="black"
          stroke-width="20"
        />
        <!-- Replace with balloon path object -->
        <path
          opacity={0}
          d="M 100 100 l 0 100 l 200 0 l 0 -200 z"
          fill="none"
          stroke="black"
          stroke-width="20"
          bind:this={balloonPath}
        />
      </svg>
    </div>
  </div>
  <div style="display: none">
    <svg>
      <path bind:this={motionPath} d={pathData} stroke="transparent" fill="none" />
    </svg>
  </div>
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

        .pill-link {
          text-decoration: none;
        }

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
      }
    }
  }

  .animation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 10rem;

    .flying-object-container {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;

      .flying-svg {
        cursor: pointer;
        will-change: transform;
        width: 150px;
        height: auto;
        user-select: none;
      }
    }

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
  }
</style>
