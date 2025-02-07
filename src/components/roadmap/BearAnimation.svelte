<script lang="ts">
    import Pill from '$lib/design-components/Pill.svelte';
    import BackButton from '$lib/images/BackButton.svelte';
    import RoadmapFooter1 from '$lib/images/RoadmapFooter1.svelte';
    import RoadmapFooter2 from '$lib/images/RoadmapFooter2.svelte';
    import RoadmapFooter3 from '$lib/images/RoadmapFooter3.svelte';
    import RoadmapFooterBear from '$lib/images/RoadmapFooterBear.svelte';
    import RoadmapFooterMobile from '$lib/images/RoadmapFooterMobile.svelte';
    import { theme } from '$lib/theme';
    import HideOn from '$lib/utility/hide-on.svelte';
    import anime from 'animejs';
    import { tick } from 'svelte';
    import { Spring } from 'svelte/motion';
    let animatedObject: SVGElement;
    let motionPath: SVGPathElement;
    let bearObject: SVGElement;
    let balloonPath: SVGPathElement;
    let balloonPath2: SVGPathElement;
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
                    targets: [balloonPath, balloonPath2],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 500,
                    delay: function (el, i) {
                        // Add delay for each path
                        return i * 500; // Each path starts after the previous one finishes
                    },
                })
                .add(
                    {
                        targets: bearObject,
                        rotate: 12.081,
                        duration: 300,
                        easing: 'easeOutQuad',
                        transformOrigin: '30% 60%', // Rotate around center
                    },
                    '-=500',
                )
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
            <div class="flying-object-container">
                <svg
                    bind:this={animatedObject}
                    width="567"
                    height="400"
                    viewBox="-156 -165 567 400"
                    style="transform: translateY({springPosition.current.y}px);"
                    class="flying-svg"
                    role="img"
                    aria-label="Animated launch button"
                >
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <g
                        bind:this={bearObject}
                        onmouseenter={handleMouseEnter}
                        onmouseleave={handleMouseLeave}
                        class="bear-object"
                    >
                        <RoadmapFooterBear />
                    </g>
                    <path
                        opacity={1}
                        d="M22.4464 43.8801C24.861 47.5021 24.6935 53.7895 24.8341 57.8954C25.2384 69.7002 23.4767 81.451 21.0344 92.9647C19.2849 101.213 17.5694 109.524 9.38622 113.375C7.6139 114.209 4.62071 114.501 3.19875 115.638C2.4075 116.271 1.15318 119.503 2.4305 120.123C4.28114 121.022 6.80386 120.312 8.68027 119.915C12.2236 119.166 15.7314 118.134 18.3352 115.472C22.7343 110.974 24.3386 103.662 26.3706 97.9271C28.8077 91.0492 31.944 84.2776 33.6378 77.1638C35.1294 70.899 36.5481 62.1469 34.406 55.8398C33.5692 53.3759 32.6078 51.786 31.25 49.6523C30.2459 48.0745 29.3662 47.5202 27.8863 46.3095C26.1648 44.9009 26.084 43.5144 25.1456 41.6377C24.6496 40.6458 23.5055 41.6056 22.9031 40.1428C22.784 39.8535 23.5777 39.5764 23.7544 39.1876C24.3352 37.9099 23.9413 35.8613 23.9413 34.5159C23.9413 15.3726 25.1456 21.2037 25.1456 1.98584"
                        fill="none"
                        stroke="#201617"
                        stroke-width="2"
                        stroke-linecap="round"
                        transform="translate(115, -30) scale(1.5)"
                        bind:this={balloonPath}
                    />
                    <path
                        opacity={1}
                        d="M40.3469 2.56723C32.8588 2.56723 25.0647 4.13276 19.1494 8.87709C10.6969 15.6565 6.08424 24.5992 3.43141 34.7306C-0.526321 49.8455 3.48243 64.8368 12.9277 77.1846C18.4069 84.3475 28.4246 88.7216 37.0068 91.1383C39.3904 91.8095 42.0403 91.7523 44.4947 91.7523C46.9929 91.7523 49.8953 92.1271 52.3319 91.5194C55.0881 90.832 57.5366 89.4474 60.1909 88.5339C62.4984 87.7397 64.1613 86.1132 66.2598 84.8919C69.4615 83.0287 71.579 79.4619 73.573 76.507C76.5903 72.0359 78.3198 66.7724 79.6419 61.6428C82.3532 51.1238 83.2564 39.0878 77.4589 29.4159C71.9191 20.174 66.4147 11.0202 56.5452 5.61629C51.408 2.80349 46.2142 1.42383 40.3469 1.42383"
                        fill="none"
                        stroke="#201617"
                        stroke-width="2"
                        stroke-linecap="round"
                        transform="translate(90, -165) scale(1.5)"
                        bind:this={balloonPath2}
                    />
                </svg>
            </div>
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
        width: 100%;
        height: 100%;
        background: gray;
        display: flex;
        justify-content: center;
        align-items: center;
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

                .flying-object-container {
                    position: absolute;
                    transform: translatex(0px) translateY(-150px);

                    .flying-svg {
                        will-change: transform;
                        height: auto;
                        user-select: none;
                    }
                    .bear-object {
                        cursor: pointer;
                    }
                }
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
