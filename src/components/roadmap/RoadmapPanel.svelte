<script lang="ts">
    import RoadmapDotPlanned from '$lib/images/RoadmapDotPlanned.svelte';
    import RoadmapDotInProgress from '$lib/images/RoadmapDotInProgress.svelte';
    import RoadmapDotCompleted from '$lib/images/RoadmapDotCompleted.svelte';

    export let title: string;
    export let year: string;
    export let content: {
        title: string;
        description: string;
    }[] = [];
    export let status: 'planned' | 'in-progress' | 'completed';
    export let showDivider: boolean = true;
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
        {#each content as item}
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
            font-weight: 700;
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
                font-weight: 700;
            }

            p {
                font-size: 1.125rem;
                line-height: 1.75rem;
                font-weight: 500;
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
        }

        .title-section,
        .content-section {
            grid-column: 2 / 3;
        }

        .title-section {
            grid-template-columns: 3.5rem 1fr;
            grid-template-areas: 'year title';
            align-items: center;
        }

        .content-section {
            padding-left: 3rem;
        }
    }
</style>
