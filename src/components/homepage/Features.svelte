<script lang="ts">
    import EmailForm from './EmailForm.svelte';
    import FeaturesAudioVideoTracks from '$lib/images/FeaturesAudioVideoTracks.svelte';
    import FeaturesStreamHighlights from '$lib/images/FeaturesStreamHighlights.svelte';
    import FeaturesVodRecordings from '$lib/images/FeaturesVodRecordings.svelte';
    import streamingSolution from '$lib/images/streaming-solution.png';
</script>

<section class="features-main">
    <div class="content-wrapper">
        <div class="title-container">
            <div class="features-pill">COMING SOON</div>
            <div class="title-wrapper">
                <h1>Scuffle&apos;s</h1>
                <h1 class="solution-title">Video Streaming Solution</h1>
            </div>
        </div>
        <div class="feature-description-wrapper">
            <p class="feature-description">
                We&apos;re on a mission to revolutionize video streaming solutions with cutting-edge
                tools and libraries.
            </p>
            <p class="feature-description">
                Explore our comprehensive suite of features and discover how we can help you elevate
                your digital presence and achieve your business goals.
            </p>
            <p class="feature-description">Dive in and explore what we have to offer!</p>
        </div>
    </div>
    <div class="image-wrapper">
        <img src={streamingSolution} alt="streaming-solution" class="streaming-solution-image" />
    </div>
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
                Your security is our priority, we implement robust encryption methods that protect
                your video content from unauthorized access.
            </p>
        </div>

        <div class="card">
            <div class="features-pill filled">HOSTING</div>
            <h3>Self Hosting</h3>
            <p>
                Host the video stack on your own infrastructure, giving you the full control over
                your data and resources.
            </p>
        </div>
    </div>
</section>
<section class="features-management">
    <h2>Content Management and Enhancement Features</h2>
    <div class="grid">
        <div class="card">
            <div class="image-wrapper audio-video-tracks">
                <FeaturesAudioVideoTracks />
            </div>
            <div class="content-wrapper">
                <h3>Multiple Audio & Video Tracks</h3>
                <p>
                    Support for multiple audio and video tracks, enabling flexible streaming
                    options.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="image-wrapper vod-recordings">
                <FeaturesVodRecordings />
            </div>
            <div class="content-wrapper">
                <h3>VOD Recording - DVR</h3>
                <p>
                    Record and playback live streams, providing a convenient way to catch up on
                    missed content.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="image-wrapper highlights">
                <FeaturesStreamHighlights />
            </div>
            <div class="content-wrapper">
                <h3>Stream Highlights</h3>
                <p>
                    Easily create and share live stream highlights to engage and grow your audience.
                </p>
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
                <div class="row">AV1 Encoding</div>
                <div class="row">True Sub-Second Latency</div>
                <!-- <div class="row">Zero-Drop Transcoding</div> -->
                <!-- <div class="row">10x More Affordable.</div> -->
                <!-- <div class="row">Budget Friendly Pricing.</div> Idk about this one makes us sound cheap?
                 We'd charge somewhat close to cost though is what they should believe-->
                <div class="row">At-Cost Pricing</div>
                <div class="row"></div>
                <div class="row">Fully Open Source Freedom</div>
                <!-- Not sure here. something related to us being reliable and evolving -->
                <!-- Cutting-Edge Technology Platform? idk -->
                <div class="row">Actively Evolving Infrastructure</div>
            </div>
        </div>
        <div class="solution-card">
            <div class="solution-card-header">
                <h3>Other<br />Video Streaming Solutions</h3>
            </div>
            <div class="row-wrapper">
                <!-- <div class="row">H.264 Only: Double the bandwidth, half the quality</div> -->
                <div class="row">Outdated H.264: Wasting your bandwidth, comprimising quality</div>
                <div class="row">Faster use</div>
                <div class="row">Traditional inflated pricing models with hidden costs</div>
                <div class="row"></div>
                <div class="row">Closed-source black boxes with limited customization</div>
                <!-- <div class="row">Legacy platforms invested in maintaining premium pricing</div> -->
                <!-- <div class="row">Legacy infrastructure with uncertain development plans/roadmap</div> -->
                <div class="row">Legacy infrastructure with no plans to reduce consumer costs</div>
            </div>
        </div>
    </div>
</section>
<EmailForm />

<style>
    h1 {
        font-size: 4rem;
        line-height: 4.4rem;
        font-weight: 600;
        @media (max-width: 1208px) {
            font-size: 3rem;
            line-height: 3.3rem;
        }
    }

    h2 {
        font-size: 2.5rem;
        @media (max-width: 1208px) {
            font-size: 2rem;
        }
    }

    .solution-title {
        font-weight: 400;
    }

    .features-main {
        display: grid;
        grid-template-columns: 1fr 24.375rem;
        gap: 2rem;

        @media (max-width: 728px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                'image'
                'content';
        }

        .content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            @media (max-width: 728px) {
                grid-area: content;
            }

            .title-container {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .feature-description-wrapper {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                .feature-description {
                    font-size: 1.125rem;
                    opacity: 0.8;
                    max-width: 75ch;
                    line-height: 1.5;
                }
            }
        }

        .image-wrapper {
            position: relative;
            overflow: hidden; /* Clip the image */
            border-radius: 1rem;

            @media (max-width: 728px) {
                grid-area: image;
                width: 100%;
            }
            .streaming-solution-image {
                width: 100%;
                object-fit: cover;
                border-radius: 1rem;

                @media (max-width: 1208px) {
                    width: 18.75rem;
                    max-width: 18.75rem;
                }

                @media (max-width: 728px) {
                    width: 500px;
                    min-width: 500px;
                    height: 23rem;
                    object-fit: cover;
                    /* To maintain aspect ratio */
                    transform: scaleX(1.5);
                }
            }
        }
    }

    .features-performance {
        display: flex;
        flex-direction: column;
        gap: 4rem;

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
            gap: 3rem;

            .card {
                h3 {
                    margin: 1rem 0 0.5rem;
                    font-size: 1.25rem;
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

    .features-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.375rem 0.5rem;
        border: 1px solid var(--color-orange500);
        border-radius: 0.5rem;
        color: var(--color-orange500);
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--color-orange500);
        width: fit-content;
    }

    .features-pill.filled {
        background-color: var(--color-orange500);
        color: var(--color-brown700);
        border: 1px solid var(--color-orange500);
        font-weight: 700;
    }

    .features-management {
        display: flex;
        flex-direction: column;
        gap: 4rem;

        .grid {
            display: flex;
            flex-wrap: wrap;
            gap: clamp(0.5rem, 4.5vw, 3.75rem);
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
                    display: grid;
                    place-items: center;

                    /* Custom padding since svg container padding isn't identical */
                    &.audio-video-tracks {
                        padding: 1.9rem 2.2rem 2.2rem 2.2rem;
                    }

                    &.vod-recordings {
                        padding: 1.81rem 2.5rem 2.2rem 2.4rem;
                    }

                    &.highlights {
                        padding: 1.25rem 2.3rem 1.62rem 2.3rem;
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
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .solution-description {
            font-size: 1.125rem;
            opacity: 0.8;
            line-height: 1.5;
            margin-bottom: 2rem;
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: minmax(20rem, 30%) minmax(20rem, 1fr);

            @media screen and (max-width: 692px) {
                grid-template-columns: repeat(2, 1fr);
            }
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
                /* 1px border */
                padding: calc(1rem - 1px);

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
                    display: flex;
                    align-items: center;
                    font-size: 1.3rem;
                    padding: 0 1rem;
                    opacity: 0.8;

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
