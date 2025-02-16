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
        overflow: hidden;

        .roadmap-icon-container {
            width: 67.25rem;
            min-width: 67.25rem;
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
                    font-kerning: none;
                    font-feature-settings:
                        'cpsp' on,
                        'liga' off;
                    font-size: 3rem;
                    font-weight: 700;
                    line-height: normal;
                }

                p {
                    font-size: 1.5rem;
                    text-align: center;
                    font-weight: 400;
                    line-height: 2rem;
                }
            }

            .pill-link {
                text-decoration: none;
            }

            /* This will be changed pending design updates */
            :global(.pill) {
                font-weight: 700;
                gap: 0.25rem;
                white-space: nowrap;

                .pill-back-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
</style>
