<script lang="ts">
    import RoadmapPanel from './RoadmapPanel.svelte';
</script>

<div class="roadmap-timeline-container">
    <RoadmapPanel
        title="First step"
        year="2025"
        content={[
            {
                title: 'Scuffle Introduction',
                description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
            },
            {
                title: 'Video Streaming Solution',
                description:
                    "We're on a mission to revolutionize video streaming solutions with cutting-edge tools and libraries.",
            },
        ]}
        status="in-progress"
    />
    <RoadmapPanel
        title="Second step"
        year="TBA"
        content={[
            {
                title: 'CDN Service',
                description: 'Community-driven CDN service.',
            },
            {
                title: 'Video Streaming Solution',
                description:
                    "We're on a mission to revolutionize video streaming solutions with cutting-edge tools and libraries.",
            },
        ]}
        status="planned"
    />
    <RoadmapPanel
        title="Third step"
        year=""
        content={[
            {
                title: 'Buh',
                description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
            },
            {
                title: 'Buh2',
                description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
            },
        ]}
        status="planned"
    />
    <RoadmapPanel
        title="Final step"
        year=""
        content={[
            {
                title: 'Buh3',
                description: 'Scuffle is an ambitious, upcoming open-source cloud provider.',
            },
        ]}
        status="planned"
        showDivider={false}
    />
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
    }
</style>
