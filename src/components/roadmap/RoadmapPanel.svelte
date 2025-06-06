<script lang="ts">
    import RoadmapDotPlanned from '$lib/images/RoadmapDotPlanned.svelte';
    import RoadmapDotInProgress from '$lib/images/RoadmapDotInProgress.svelte';
    import RoadmapDotCompleted from '$lib/images/RoadmapDotCompleted.svelte';

    export type RoadmapPanelProps = {
        key: string;
        title: string;
        year: string;
        content: {
            title: string;
            description: string;
        }[];
        status: 'planned' | 'in-progress' | 'completed';
        showDivider?: boolean;
    };

    let { key, title, year, content, status, showDivider }: RoadmapPanelProps = $props();

    const incomplete = status === 'planned';

    const statusIcon = {
        planned: RoadmapDotPlanned,
        'in-progress': RoadmapDotInProgress,
        completed: RoadmapDotCompleted,
    };

    const IconComponent = statusIcon[status];
</script>

<div class="panel">
    <div class="title-section">
        <h2>{title}</h2>
        <p class="year">{year}</p>
    </div>
    <div class="divider-section">
        <div class="status-icon">
            <IconComponent />
        </div>
        {#if showDivider}
            <div class={['divider-line', { incomplete }]}></div>
        {/if}
    </div>
    <div class="content-section">
        {#each content as item, i (`${key}-content-${i}`)}
            <div class="content-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .panel {
        display: grid;
        grid-template-columns: 10rem 1px 1fr;
        gap: 4rem;
        width: 100%;
        grid-template-areas: 'title-section divider-section content-section';
    }

    .title-section {
        grid-area: title-section;
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-areas:
            'title'
            'year';

        h2 {
            grid-area: title;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2rem;
        }

        .year {
            grid-area: year;
            font-size: 1.125rem;
            color: var(--color-brown700);
        }
    }

    .divider-section {
        grid-area: divider-section;
        margin-top: 0.125rem;

        .status-icon {
            width: 1.5rem;
            transform: translateX(-50%);
        }

        .divider-line {
            margin-top: 0.125rem;
            background-color: var(--color-orange500);
            width: 0.25rem;
            transform: translateX(-50%);
            height: calc(100% - 2.2rem);
            border-radius: 0.75rem;

            &.incomplete {
                background-color: var(--color-sand600);
            }
        }
    }

    .content-section {
        grid-area: content-section;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .content-card {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 1.5rem;
            h3 {
                font-size: 1.5rem;
                font-weight: 600;
            }

            p {
                font-size: 1.125rem;
                line-height: 1.75rem;
                font-weight: 400;
                white-space: pre-line;
            }
        }
    }

    @media (max-width: 768px) {
        .panel {
            grid-template-columns: 0.25rem 1fr;
            gap: 1.5rem;
            grid-template-areas:
                'divider-section title-section'
                'divider-section content-section';
        }

        .divider-section {
            grid-column: 1 / 2;

            .divider-line {
                height: calc(100% - 0.2rem);
            }
        }

        .title-section,
        .content-section {
            grid-column: 2 / 3;
        }

        .title-section {
            margin-top: 0.25rem;
            grid-template-areas:
                'year'
                'title';

            h2 {
                color: var(--color-brown600);
                font-size: 1.25rem;
                line-height: 2rem;
            }

            .year {
                line-height: normal;
            }
        }

        .content-section {
            .content-card {
                padding: 1.5rem 1.5rem 1.5rem 0;
            }
        }
    }
</style>
