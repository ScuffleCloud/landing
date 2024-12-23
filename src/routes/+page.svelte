<script lang="ts">
  import audioVideoTracks from '$lib/images/features-audio-video-tracks.svg';
  import streamHighlights from '$lib/images/features-stream-highlights.svg';
  import vodRecording from '$lib/images/features-vod-recording.svg';
  import scuffleBear from '$lib/images/scuffle-bear.svg';
  import accentAddon from '$lib/images/addons-accent.svg';
  import heartsAddon from '$lib/images/addons-hearts.svg';
  import Hero from '../components/homepage/Hero.svelte';
  import EmailForm from '../components/homepage/EmailForm.svelte';
</script>

<div class="hero-section-container">
  <Hero />
  <EmailForm />
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
        Scuffle aims to be a community-driven platform, built from the ground up with transparency
        and openness in mind. Licensed under AGPL3, Apache 2.0, and MIT*.
      </p>
      <p class="underlined-text">Learn more</p>
    </div>
  </div>
</div>

<div class="features-bg">
  <div class="features-container">
    <section class="features-main">
      <div class="features-pill">Coming Soon</div>
      <h1>Scuffle&apos;s</h1>
      <h1 class="solution-title">Video Streaming Solution</h1>
      <p class="feature-description">
        We&apos;re on a mission to revolutionize video streaming solutions with cutting-edge tools
        and libraries.<br /><br />
        Explore our comprehensive suite of features and discover how we can help you elevate your digital
        presence and achieve your business goals.<br />
        Dive in and explore what we have to offer!
      </p>
    </section>
    <section class="features-performance">
      <h2>Technical and Performance Features</h2>
      <div class="grid">
        <div class="card">
          <div class="features-pill filled">UHD 144FPS</div>
          <h3>Higher Quality Streaming</h3>
          <p>Enjoy video streaming in 4K resolution and up to 144fps.</p>
        </div>

        <div class="card">
          <div class="features-pill filled">SPEED</div>
          <h3>Sub second latency</h3>
          <p>Experience real-time video streaming with sub-second latency.</p>
        </div>

        <div class="card">
          <div class="features-pill filled">AV1</div>
          <h3>AV1 Encoding</h3>
          <p>
            Utilize AV1 next generation video encoding for efficient and high-quality video
            compression.
          </p>
        </div>

        <div class="card">
          <div class="features-pill filled">CAPTIONS</div>
          <h3>Live Transcription</h3>
          <p>Provide live transcription services, enhancing accessibility and user immersion.</p>
        </div>

        <div class="card">
          <div class="features-pill filled">SECURITY</div>
          <h3>Encrypted Broadcasts</h3>
          <p>
            Your security is our priority, we implement robust encryption methods that protect your
            video content from unauthorized access.
          </p>
        </div>

        <div class="card">
          <div class="features-pill filled">HOSTING</div>
          <h3>Encrypted Broadcasts</h3>
          <p>
            Host the video stack on your own infrastructure, giving you the full control over your
            data and resources.
          </p>
        </div>
      </div>
    </section>
    <section class="features-management">
      <h2>Content Management and Enhancement Features</h2>
      <div class="grid">
        <div class="card">
          <div class="image-wrapper">
            <img src={audioVideoTracks} alt="Multiple Audio & Video Tracks" />
          </div>
          <div class="content-wrapper">
            <h3>Multiple Audio & Video Tracks</h3>
            <p>Support for multiple audio and video tracks, enabling flexible streaming options.</p>
          </div>
        </div>

        <div class="card">
          <div class="image-wrapper">
            <img src={vodRecording} alt="Multiple Audio & Video Tracks" />
          </div>
          <div class="content-wrapper">
            <h3>VOD Recording - DVR</h3>
            <p>
              Record and playback live streams, providing a convenient way to catch up on missed
              content.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="image-wrapper">
            <img src={streamHighlights} alt="Stream Highlights" />
          </div>
          <div class="content-wrapper">
            <h3>Stream Highlights</h3>
            <p>Easily create and share live stream highlights to engage and grow your audience.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="features-solutions">
      <h2>Cost-Effective Solution</h2>
      <p class="solution-description">
        Significantly more affordable than current market options,<br />
        making high-quality video streaming accessible to all.
      </p>
      <div class="comparison-grid">
        <div class="solution-card">
          <div class="solution-card-header main">
            <h3 class="bold our-solution">Scuffle&apos;s</h3>
            <h3 class="our-solution">Video Streaming Solution</h3>
          </div>
          <div class="row-wrapper">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
          </div>
        </div>
        <div class="solution-card">
          <div class="solution-card-header">
            <h3>Other<br />Video Streaming Solutions</h3>
          </div>
          <div class="row-wrapper">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
          </div>
        </div>
      </div>
    </section>
    <EmailForm />
  </div>
</div>

<style>
  .hero-section-container {
    position: relative;
    background-color: var(--color-light100);
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: 1rem;
    width: 100%;

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
  }

  .features-bg {
    background-color: var(--color-brown700);

    .features-container {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      max-width: var(--layout-width);
      margin: 0 auto;
      padding: 4rem 1rem;
      width: 100%;
      color: var(--color-light100);

      h2 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
      }
      h1 {
        font-weight: 400;
      }
    }
  }

  .solution-title {
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  .feature-description {
    font-size: 1rem;
    opacity: 0.8;
    max-width: 75ch;
    line-height: 1.5;
  }

  .features-performance {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
      gap: 2rem;

      .card {
        h3 {
          margin: 1rem 0 0.5rem;
          font-size: 1.25rem;
        }

        p {
          opacity: 0.8;
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.5;
        }
      }
    }
  }

  .features-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-orange500);
    border-radius: 0.5rem;
    color: var(--color-orange500);
    font-weight: 700;
    font-size: 0.75rem;
    color: var(--color-orange500);
  }

  .features-pill.filled {
    background-color: var(--color-orange500);
    color: var(--color-brown700);
    border: 1px solid var(--color-orange500);
    font-weight: 800;
  }

  .features-management {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: clamp(0.5rem, 4vw, 3.75rem);
      row-gap: 2rem;
      flex-shrink: 0;
      width: 100%;

      .card {
        padding: 0.5rem;
        border-radius: 0.75rem;
        background-color: #453435;
        flex: 1 1 15.75rem; /* grow shrink basis */

        .image-wrapper {
          padding: 2rem;
          background-color: #4f3f40;
          border-radius: 0.5rem;

          img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
        .content-wrapper {
          padding: 1rem;

          h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.125rem;
          }

          p {
            opacity: 0.8;
            margin: 0;
            font-size: 1.125rem;
            line-height: 1.5;
          }
        }
      }
    }
  }

  .features-solutions {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .solution-description {
      font-size: 1.125rem;
      opacity: 0.8;
      line-height: 1.5;
      margin-bottom: 3rem;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 30% 1fr;
    }

    .solution-card {
      display: flex;
      flex-direction: column;
      border: 2px solid transparent;
      color: var(--color-light100);

      h3 {
        font-size: 1.5rem;
        margin: 0;
        line-height: 1.3;
        font-weight: 400;

        &.bold {
          font-weight: 600;
        }
        &.our-solution {
          color: black;
        }
      }

      .solution-card-header {
        padding: 1rem;

        &.main {
          background-color: var(--color-orange500);
        }
      }

      .row-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.4rem;

        &:last-child {
          border-top: 1px solid #564546;
        }
        .row {
          height: 3.2rem;
          background-color: #564546;

          &:nth-child(even) {
            background-color: inherit;
          }
        }
      }

      &:first-child {
        border: 2px solid var(--color-orange500);
      }
    }
  }
</style>
