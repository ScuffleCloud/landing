<script lang="ts">
    import AddonHearts from '$lib/images/AddonHearts.svelte';
    import AddonAccent from '$lib/images/AddonAccent.svelte';
    import ScuffleBear from '$lib/images/ScuffleBear.svelte';
    import { PUBLIC_LEARN_MORE_URL } from '$env/static/public';
</script>

<div class="scuffle-about-container">
    <div class="content-1" data-aos="fade-right" data-aos-duration="800">
        <ScuffleBear />
    </div>
    <div class="content-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
        <div class="addon-accent">
            <AddonAccent />
        </div>
        <h3 style="white-space: nowrap;">What is Scuffle?</h3>
        <div class="bear-text-container">
            <p class="bear-text-1">Scuffle is an ambitious, upcoming open-source cloud provider.</p>
            <p class="bear-text-2">
                Our initial focus is on delivering high-quality video streaming solutions for both
                static and real-time video content.
            </p>
        </div>
    </div>
    <div class="content-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <h3>
            Open Source - Community driven vision
            <div class="addon-hearts">
                <AddonHearts />
            </div>
        </h3>
        <p class="bear-text-1">
            Scuffle aims to be a community-driven platform, built from the ground up with
            transparency and openness in mind. Licensed under AGPL3, Apache 2.0, and MIT*.
        </p>
        <a href={PUBLIC_LEARN_MORE_URL} target="_blank" class="underlined-text">Learn more</a>
    </div>
</div>

<style>
    .scuffle-about-container {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 1fr;
        row-gap: 4rem;
        column-gap: 4rem;
        width: 100%;
        margin: 7rem 0;
        padding: 0 2rem;
        box-sizing: border-box;
        z-index: 1;

        .content-1 {
            /* Using grid instead of flex so the image renders in safari */
            display: grid;
            place-items: center;
            grid-area: 1 / 1 / 3 / 2;
        }

        .content-2 {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .content-3 {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        @media (max-width: 768px) {
            row-gap: 2rem;
            column-gap: 2rem;
            grid-template-columns: 40% 1fr;
            padding: 0 1rem;

            .content-1 {
                grid-area: 1 / 2 / 2 / 3;
            }
            .content-2 {
                grid-area: 1 / 1 / 2 / 2;
            }
            .content-3 {
                grid-area: 2 / 1 / 3 / 3;
            }
        }

        @media (max-width: 592px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            row-gap: 2rem;
            padding: 0 1rem;
            margin-top: 4rem;
            margin-bottom: 1rem;

            .content-1 {
                grid-area: 1 / 1 / 2 / 2;
                padding: 2rem;
            }
            .content-2 {
                grid-area: 2 / 1 / 3 / 2;
            }
            .content-3 {
                grid-area: 3 / 1 / 4 / 2;
            }
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .bear-text-1 {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.75rem;
        }

        .bear-text-2 {
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 1.75rem;
        }

        .content-2 {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .addon-accent {
                position: absolute;
                top: -18px;
                left: -20px;
                z-index: 1;
            }

            .bear-text-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        }

        .content-3 {
            h3 {
                position: relative;
                z-index: 2;
                display: inline;

                @media (max-width: 768px) {
                    max-width: 300px;
                }

                .addon-hearts {
                    position: absolute;
                    top: -25px;
                    right: -33px;
                    z-index: 1;
                }
            }

            .underlined-text {
                text-decoration: underline;
                font-weight: 600;
                padding: 1rem 0rem;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1rem;
            }
        }
    }
</style>
