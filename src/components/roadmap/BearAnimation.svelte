<script lang="ts">
    import Pill from '$lib/design-components/Pill.svelte';
    import BackButton from '$lib/images/BackButton.svelte';
    import RoadmapFooter1 from '$lib/images/RoadmapFooter1.svelte';
    import RoadmapFooter2 from '$lib/images/RoadmapFooter2.svelte';
    import RoadmapFooter3 from '$lib/images/RoadmapFooter3.svelte';
    import RoadmapFooterBear from '$lib/images/RoadmapFooterBear.svelte';
    import { theme } from '$lib/theme';
    import anime from 'animejs';
    import { tick } from 'svelte';
    import { Spring } from 'svelte/motion';
    let animatedObject: SVGElement;
    let motionPath: SVGPathElement;
    let balloonPath: SVGPathElement;

    let scrollComplete = false;
    let pathData = $state('');
    let isAnimating = $state(false);

    function fadeIntoViewPostAnimation() {
        anime({
            targets: animatedObject,
            opacity: [0, 1],
            duration: 400,
            easing: 'easeInQuad',
        });
    }

    function startAnimation() {
        const startScrollY = window.scrollY;
        const endPoint = -1 * (window.innerHeight + startScrollY);
        isAnimating = true;
        // Path relatively winding up screen
        pathData = `M 0 0 C 20 ${endPoint / 6} -20 ${endPoint / 3} 0 ${endPoint}`;

        // Tick to wait for path state update depending on user screen size
        tick().then(() => {
            const animation = anime.timeline({
                complete: (anim) => {
                    scrollComplete = false;
                    anim.seek(0);
                    isAnimating = false;
                },
                changeComplete: () => {
                    fadeIntoViewPostAnimation();
                },
            });

            animation
                .add({
                    opacity: {
                        value: [0, 1],
                        duration: 100,
                    },
                    targets: balloonPath,
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 2000,
                })
                .add({
                    targets: animatedObject,
                    translateX: anime.path(motionPath)('x'),
                    translateY: anime.path(motionPath)('y'),
                    duration: 4000,
                    easing: 'easeOutQuad',
                    // To get over sticky nav
                    zIndex: {
                        value: 1000,
                        round: true,
                    },
                    // Use update method instead of scroll delay lib so it's smoother (scrolling update rate equalling animation rate)
                    update: function (anim) {
                        if (scrollComplete) return;
                        if (window.scrollY <= 0) {
                            scrollComplete = true;
                            return;
                        }

                        const progress = anim.progress / 100;
                        const scrollProgress = Math.max(0, 1 - progress * 5); // minus/add to 6 for faster scroll
                        const targetScroll = startScrollY * scrollProgress;

                        window.scrollTo({
                            top: targetScroll,
                            behavior: 'auto',
                        });
                    },
                });
        });
    }

    // Spring animation on hover
    const springPosition = new Spring(
        { x: 0, y: 0 },
        {
            stiffness: 0.2,
            damping: 0.4,
        },
    );

    function handleMouseEnter() {
        if (isAnimating) return;
        springPosition.target = { x: 0, y: -5 };
    }

    function handleMouseLeave() {
        if (isAnimating) return;
        springPosition.target = { x: 0, y: 0 };
    }
</script>

<div class="animation-container">
    <div class="back-button-container">
        <Pill
            color={theme.colors.orange500}
            as="button"
            onClick={startAnimation}
            disabled={isAnimating}
        >
            <p>Go Back</p>
            <BackButton />
        </Pill>
    </div>
    <div class="footer-container">
        <RoadmapFooter1 />
        <RoadmapFooter2 />
        <RoadmapFooter3 />
        <div class="flying-object-container">
            <svg
                bind:this={animatedObject}
                width="252"
                height="197"
                viewBox="0 0 252 197"
                onmouseenter={handleMouseEnter}
                onmouseleave={handleMouseLeave}
                style="transform: translateY({springPosition.current.y}px);"
                class="flying-svg"
                role="img"
                aria-label="Animated launch button"
            >
                <RoadmapFooterBear />
                <path
                    opacity={0}
                    d="M 100 100 l 0 100 l 200 0 l 0 -200 z"
                    fill="none"
                    stroke="black"
                    stroke-width="20"
                    bind:this={balloonPath}
                />
            </svg>
        </div>
    </div>
</div>
<div style="display: none">
    <svg>
        <path bind:this={motionPath} d={pathData} stroke="transparent" fill="none" />
    </svg>
</div>

<style>
    .animation-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        gap: 10rem;
        position: relative;

        .back-button-container {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .footer-container {
            display: flex;
            width: 100%;

            .footer-bear-group {
                position: relative;
                display: flex;
                align-items: flex-end;

                .flying-object-container {
                    position: absolute;
                    bottom: 0;
                    transform: translateX(25%);
                    width: 100%;
                    height: 100%;

                    .flying-svg {
                        cursor: pointer;
                        will-change: transform;
                        height: auto;
                        user-select: none;
                    }
                }
            }
        }

        :global(.pill) {
            font-weight: 700;
            height: clamp(2rem, 6vw, 3rem);
            gap: 0.25rem;
            white-space: nowrap;
            padding: 0 clamp(0.75rem, 2vw, 1rem);

            p {
                font-size: clamp(0.75rem, 2.3vw, 1rem);
            }
        }
    }
</style>
