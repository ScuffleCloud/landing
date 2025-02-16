<script lang="ts">
    import YouShouldContribute from '$lib/images/YouShouldContribute.svelte';
    import YouShouldContributeMobileLeft from '$lib/images/YouShouldContributeMobileLeft.svelte';
    import YouShouldContributeMobileRight from '$lib/images/YouShouldContributeMobileRight.svelte';
</script>

<div class="hero-section-header">
    <div class="hero-section">
        <h1 class="hero-section-title-1">Scuffle.</h1>
        <h1 class="hero-section-title-2">
            new up-and-coming.<br />
            open source.<br />
            cloud provider.
        </h1>
    </div>
    <div class="header-bubble-container hide-tablet hide-mobile hide-mobile-xs">
        <div class="you-should-contribute-container">
            <YouShouldContribute />
        </div>
    </div>
    <div class="header-bubble-container-mobile hide-ds hide-dm hide-dl">
        <div class="left-bubble">
            <YouShouldContributeMobileLeft />
        </div>
        <div class="right-bubble">
            <YouShouldContributeMobileRight />
        </div>
    </div>
</div>

<style>
    .hero-section-header {
        position: relative;
        z-index: 1;
        justify-content: space-between;
        align-items: center;
        padding: 6rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 920px) {
            padding: 2rem 0 2rem 0;
            text-align: center;
            align-items: center;
        }

        .hero-section {
            display: flex;
            flex-direction: column;

            h1 {
                color: var(--brown-800, #201617);
                line-height: 110%;
                /* Can fix these later */
                font-size: clamp(3rem, calc(1.5rem + 2.5vw), 3.5rem);
            }

            .hero-section-title-1 {
                font-weight: 700;
            }

            .hero-section-title-2 {
                font-weight: 400;
            }
        }

        .header-bubble-container {
            position: absolute;
            right: 0;
            translate: 4% -50%;
            top: 50%;

            .you-should-contribute-container {
                height: auto;
                /* Can fix these later or move to media queries */
            }
        }

        .header-bubble-container-mobile {
            display: flex;
            width: 100%;
            align-items: center;
            margin-top: -5rem;
            position: relative;
            min-height: 20rem;

            .left-bubble {
                position: absolute;
                left: 0;
                transform-origin: left center; /* Scale from left side */
            }

            .right-bubble {
                position: absolute;
                right: 0;
                transform-origin: right center; /* Scale from right side */
            }
            @media (max-width: 592px) {
                margin-top: 0rem;
                min-height: 12rem;

                .left-bubble {
                    transform: scale(0.72);
                }

                .right-bubble {
                    transform: scale(0.72);
                }
            }
        }
    }
</style>
