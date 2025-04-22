<script lang="ts">
    import PointingBear from '$lib/images/PointingBear.svelte';
    import type { Streamed } from '$lib/types';

    type Props = {
        streamedData: Streamed<any[]>;
    };

    const { streamedData }: Props = $props();
</script>

<div class="about-container">
    <div class="about-hero">
        <div class="about-hero-left">
            <div class="about-hero-image">
                <PointingBear />
            </div>
        </div>
        <div class="about-hero-content">
            <h1>We are committed to building a better livestreaming experience</h1>
            <p>
                It shouldn't be hard or expensive to build a upload or stream video content online.
                So we created Scuffle. We're dedicated to developing high-quality, affordable video
                streaming solutions that transform how people create and consume video content
                everywhere.
            </p>
        </div>
    </div>
    <div class="contributors">
        <div class="contributors-section">
            <h3>Contributors</h3>
            <div class="contributors-grid">
                {#await streamedData}
                    <p>Loading contributors...</p>
                {:then resolvedContributors}
                    {#each resolvedContributors as contributor}
                        <a
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="contributor"
                        >
                            <div class="contributor-image">
                                <img src={contributor.avatar_url} alt={contributor.login} />
                            </div>
                        </a>
                    {/each}
                {:catch error}
                    <p>Error loading contributors</p>
                {/await}
            </div>
        </div>
    </div>
</div>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .about-hero {
        display: flex;
        gap: 5rem;
        align-items: center;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }

        .about-hero-left {
            position: relative;
            flex-shrink: 0;
            width: 316px;
            height: 420px;
            overflow: hidden; /* Prevent overflow */

            .about-hero-image {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                :global(svg) {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            }
        }

        .about-hero-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            h1 {
                font-size: 2.25rem;
                font-weight: 600;
                line-height: 1.2;

                @media (max-width: 768px) {
                    font-size: 2.5rem;
                }
            }

            p {
                font-size: 1.125rem;
                line-height: 1.6;
                max-width: 56ch;
            }
        }
    }
    .contributors {
        margin-top: 2rem;

        .contributors-section {
            margin: 2rem 0;

            .contributors-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 1rem;

                .contributor {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.25rem;
                    border-radius: 0.5rem;
                    transition: all 0.2s ease;

                    &:hover {
                        background-color: rgba(0, 0, 0, 0.03);
                        transform: translateY(-2px);
                    }

                    .contributor-image {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        overflow: hidden;
                        flex-shrink: 0;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
    }
</style>
