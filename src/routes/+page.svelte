<script lang="ts">
  import EmailForm from '$lib/components/Homepage/EmailForm.svelte';
  import Flex from '$lib/design-components/Flex.svelte';
  import audioVideoTracks from '$lib/images/features-audio-video-tracks.svg';
  import streamHighlights from '$lib/images/features-stream-highlights.svg';
  import vodRecording from '$lib/images/features-vod-recording.svg';
</script>

<div class="hero-section-container">
  <Flex justifyContent="space-between" alignItems="center" padding={[2, 0]}>
    <Flex direction="column" class="hero-section">
      <h1>Scuffle.</h1>
      <h1 class="hero-section-title">
        new up-and-coming.<br />
        open source.<br />
        cloud provider.
      </h1>
    </Flex>

    <Flex alignItems="center" gap={6}>
      <div class="github-bubble">
        <p>you should contribute!</p>
      </div>
      <div class="box"></div>
    </Flex>
  </Flex>
  <EmailForm />
  <Flex direction="row" margin={[2, 0]} width="100%" gap={2}>
    <Flex justifyContent="center" alignItems="center">
      <img src="/scuffle-bear.svg" alt="Scuffle Bear" />
    </Flex>
    <Flex direction="column" gap={15}>
      <Flex gap={4} direction="column">
        <h3>What is Scuffle?</h3>
        <p>
          Scuffle is an ambitious, upcoming open-source cloud provider. <br />
          Our initial focus is on delivering high-quality video streaming solutions for both static and
          real-time video content.
        </p>
      </Flex>
      <Flex gap={4} direction="column">
        <h3>Open Source - Community driven vision</h3>
        <p>
          Scuffle aims to be a community-driven platform, built from the ground up with transparency
          and openness in mind. Licensed under AGPL3, Apache 2.0, and MIT*.
        </p>
      </Flex>
    </Flex>
  </Flex>
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
    background-color: var(--color-light100);
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;

    :global {
      .hero-section {
        h1 {
          line-height: 1.2;
        }
      }

      .hero-section-title {
        font-weight: 400;
      }
    }

    /* Will be changed later when picture is added */
    .github-bubble {
      background: white;
      padding: 0.75rem 1rem;
      border-radius: 1rem;
      position: relative;
    }

    /* Will be changed later when picture is added */
    .github-bubble::after {
      content: '';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      border-left: 0.625rem solid white;
      border-top: 0.625rem solid transparent;
      border-bottom: 0.625rem solid transparent;
    }
  }

  /* Will be changed later when picture is added */
  .box {
    width: 100px;
    height: 100px;
    background: var(--color-light200);
    border-radius: 0.5rem;
  }

  .features-bg {
    background-color: var(--color-brown700);
  }

  .features-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 64rem;
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

  .solution-title {
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  .feature-description {
    font-size: 1rem;
    opacity: 0.8;
    max-width: 600px;
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    border-radius: 8px;
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
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(0.5rem, 8vw, 3.75rem);
      max-width: 1200px;

      .card {
        padding: 0.5rem;
        border-radius: 12px;
        background-color: #453435;

        .image-wrapper {
          padding: 2rem;
          background-color: #4f3f40;
          border-radius: 8px;

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
