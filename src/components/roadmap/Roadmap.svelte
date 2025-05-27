<script lang="ts">
    import RoadmapPanel, { type RoadmapPanelProps } from './RoadmapPanel.svelte';

    const roadmapItems: RoadmapPanelProps[] = [
        {
            key: 'panel-0',
            title: 'First step',
            year: 'Q2 2025',
            content: [
                {
                    title: 'Building Essential Video Stack',
                    description:
                        'Core video infrastucture (injest, transcoding, edge content delivery) with authentication, metrics tracking and billing',
                },
                {
                    title: 'Initial Development Tools',
                    description:
                        'SDK and API documentation, dashboard and monitoring tools for stream performance, viewer analytics and stream health',
                },
            ],
            status: 'in-progress',
        },
        {
            key: 'panel-1',
            title: 'Second step',
            year: 'Q3 2025',
            content: [
                {
                    title: 'Platform Optimization',
                    description: 'Comprehensive performance testing and security validation',
                },
                {
                    title: 'Beta Release',
                    description:
                        'Limited internal release within the community for testing and feedback',
                },
            ],
            status: 'planned',
        },
        {
            key: 'panel-2',
            title: 'Final step',
            year: 'Q4 2025',
            content: [
                {
                    title: 'Market Launch',
                    description: 'Opening up to the public',
                },
            ],
            status: 'planned',
            showDivider: false,
        },
    ];
</script>

<div class="roadmap-timeline-container" data-aos="fade-up" data-aos-duration="800">
    {#each roadmapItems as panel (panel.key)}
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
