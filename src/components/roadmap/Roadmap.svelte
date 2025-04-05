<script lang="ts">
    import RoadmapPanel, { type RoadmapPanelProps } from './RoadmapPanel.svelte';

    const roadmapItems: RoadmapPanelProps[] = [
        {
            key: 'panel-0',
            title: 'First step',
            year: '2025',
            content: [
                {
                    title: 'Scuffle Introduction',
                    description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
                },
                {
                    title: 'Video Streaming Solution',
                    description:
                        "We're on a mission to revolutionize video streaming solutions with cutting-edge tools and libraries.",
                },
            ],
            status: 'in-progress',
        },
        {
            key: 'panel-1',
            title: 'Second step',
            year: 'TBA',
            content: [
                {
                    title: 'Scuffle Introduction',
                    description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
                },
                {
                    title: 'Video Streaming Solution',
                    description:
                        "We're on a mission to revolutionize video streaming solutions with cutting-edge tools and libraries.",
                },
            ],
            status: 'planned',
        },
        {
            key: 'panel-2',
            title: 'Third step',
            year: '',
            content: [
                {
                    title: 'Buh',
                    description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
                },
                {
                    title: 'Buh2',
                    description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
                },
            ],
            status: 'planned',
        },
        {
            key: 'panel-3',
            title: 'Final step',
            year: '',
            content: [
                {
                    title: 'Buh3',
                    description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
                },
            ],
            status: 'planned',
            showDivider: false,
        },
    ];
</script>

<div class="roadmap-timeline-container">
    {#each roadmapItems as panel, i (`panel-${i}`)}
        <RoadmapPanel
            key={panel.key}
            title={panel.title}
            year={panel.year}
            content={panel.content}
            status={panel.status}
            showDivider={panel.showDivider ?? true}
        />
    {/each}
</div>

<style>
    .roadmap-timeline-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
        margin-top: 4rem;
        padding: 2.5rem 2.5rem;

        @media (max-width: 768px) {
            /* Align with header icon */
            padding: 2.5rem 2.23rem;
            gap: 2rem;
        }
    }
</style>
