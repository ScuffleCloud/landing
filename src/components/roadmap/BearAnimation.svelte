<script lang="ts">
    import Pill from '$lib/design-components/Pill.svelte';
    import BackButton from '$lib/images/BackButton.svelte';
    import RoadmapFooter1 from '$lib/images/RoadmapFooter1.svelte';
    import RoadmapFooter2 from '$lib/images/RoadmapFooter2.svelte';
    import RoadmapFooter3 from '$lib/images/RoadmapFooter3.svelte';
    import RoadmapFooterMobile from '$lib/images/RoadmapFooterMobile.svelte';
    import { theme } from '$lib/theme';
    import HideOn from '$lib/utility/hide-on.svelte';
    import anime from 'animejs';
    import { tick } from 'svelte';
    let motionPath: SVGPathElement;
    let scrollComplete = false;

    let pathData = $state('');
    let isAnimating = $state(false);

    function fadeIntoViewPostAnimation() {
        anime({
            targets: document.getElementsByClassName('animate-flying-object'),
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
                    targets: [
                        document.getElementsByClassName('animate-balloon-path'),
                        document.getElementsByClassName('animate-balloon-path-2'),
                        document.getElementsByClassName('animate-balloon-path-3'),
                        document.getElementsByClassName('animate-balloon-path-4'),
                    ],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 500,
                    delay: function (el, i) {
                        // Add delay for each path
                        return i * 250; // Each path starts after the previous one finishes
                    },
                })
                .add(
                    {
                        targets: document.getElementsByClassName('animate-bear-object'),
                        rotate: 12.081,
                        duration: 300,
                        easing: 'easeOutQuad',
                        transformOrigin: '30% 60%', // Rotate around center
                    },
                    '-=500',
                )
                .add({
                    targets: document.getElementsByClassName('animate-flying-object'),
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
                        // anim.completed to prevent race condition on updating scrollComplete in complete callback
                        if (scrollComplete || anim.completed) return;
                        const progress = anim.progress / 100;
                        const scrollProgress = Math.max(0, 1 - progress * 5); // minus/add to 6 for faster scroll
                        const targetScroll = startScrollY * scrollProgress;
                        window.scrollTo({
                            top: targetScroll,
                            behavior: 'auto',
                        });
                        // Stop scrolling when target is reached so user can navigate
                        if (window.scrollY <= 0) {
                            scrollComplete = true;
                        }
                    },
                });
        });
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
            <div class="pill-content">
                <p>Go Back</p>
                <BackButton />
            </div>
        </Pill>
    </div>
    <div class="footer-container">
        <HideOn mobile tablet ds>
            <div class="a-container">
                <RoadmapFooter1 />
            </div>
            <div class="b-container">
                <div class="line"></div>
                <RoadmapFooter2 />
            </div>
        </HideOn>
        <HideOn dm dl>
            <div class="mobile-container">
                <RoadmapFooterMobile />
            </div>
        </HideOn>
        <div class="c-container">
            <HideOn mobile tablet ds>
                <RoadmapFooter3 />
            </HideOn>
        </div>
    </div>
</div>
<div style="display: none">
    <svg>
        <path bind:this={motionPath} d={pathData} stroke="transparent" fill="none" />
    </svg>
</div>

<style>
    .mobile-container {
        position: relative;
        background: gray;
        justify-content: center;
        overflow: hidden;
        margin: 0 auto;

        @media (max-width: 592px) {
            margin-left: -60px;
        }
    }

    .animation-container {
        width: 100%;
        display: flex;
        margin-top: 2rem;
        margin-bottom: 2rem;
        position: relative;
        padding: 0 2rem;
        max-width: 2000px;
        margin: 0 auto;

        @media (max-width: 592px) {
            padding: 0;
        }

        .back-button-container {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
        }

        .footer-container {
            width: 100%;
            background: gray;
            height: 400px;
            display: flex;
            flex-direction: row;
            align-items: center;

            .b-container {
                flex-shrink: 1;
                flex-grow: 1;
                overflow: hidden;
                display: flex;
                justify-content: center;
                position: relative;
                height: 100%;

                .line {
                    height: 0.1875rem;
                    background: #201617;
                    width: 100%;
                    position: absolute;
                    bottom: 164px;
                }
            }

            :global(.b-container > svg) {
                flex-shrink: 0;
            }

            .c-container {
                flex-shrink: 0;
            }
        }

        .pill-content {
            display: flex;
            align-items: center;
            font-weight: 700;
            gap: 0.25rem;
            white-space: nowrap;
        }
    }
</style>
