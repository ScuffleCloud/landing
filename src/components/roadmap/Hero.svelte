<script lang="ts">
    import Pill from '$lib/design-components/Pill.svelte';
    import { theme } from '$lib/theme';
    import { PUBLIC_JIRA_URL } from '$env/static/public';
    import BackButton from '$lib/images/BackButton.svelte';
    import RoadmapIcon from '$lib/images/RoadmapIcon.svelte';
</script>

<div class="roadmap-header-container">
    <div class="roadmap-icon-container">
        <RoadmapIcon />
    </div>
    <div class="header-overlay">
        <div class="header-overlay-content">
            <h1>Scuffle's Roadmap</h1>
            <p>
                Here is an overview of the features we are currently<br />
                developing, along with the progress made so far.<br />
            </p>
        </div>
        <a href={PUBLIC_JIRA_URL} class="pill-link">
            <Pill color={theme.colors.orange500}>
                <p>Detailed Kanban Board</p>
                <div class="pill-back-button">
                    <BackButton />
                </div>
            </Pill>
        </a>
    </div>
</div>

<style>
    .roadmap-header-container {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .roadmap-icon-container {
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

            /* This will be changed pending design updates */
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

                .pill-back-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
</style>
