<script>
    import PointingBear from '$lib/images/PointingBear.svelte';
    import { createQuery, useQueryClient } from '@tanstack/svelte-query';

    // Use the query from the Navbar component

    // get query at github-repo-info query key
    const queryClient = useQueryClient();
    // const repoQuery = queryClient.getQueryData(['github-repo-info']);

    // log repo query
    // console.log(repoQuery);
    // const contributorsQuery = createQuery({
    //     queryKey: ['github-contributors'],
    //     enabled: $repoQuery.data?.contributors_url,
    //     queryFn: async () => {
    //         const response = await fetch($repoQuery.data.contributors_url);
    //         return response.json();
    //     },
    // });
</script>

<div class="about-container">
    <div class="about-hero">
        <div class="about-hero-left">
            <div class="about-hero-image">
                <PointingBear />
            </div>
        </div>
        <div class="about-hero-content">
            <h1>We are committed to building a better livestreaming experience</h1>
            <p>
                It shouldn't be hard or expensive to build a upload or stream video content online.
                So we created Scuffle. We're dedicated to developing high-quality, affordable video
                streaming solutions that transform how people create and consume video content
                everywhere.
            </p>
        </div>
    </div>

    <div class="about-team">
        <h2>Our Team</h2>
        <div class="team-grid">
            <div class="team-member">
                <div class="team-member-image"></div>
                <h3>Jane Smith</h3>
                <p>Founder & CEO</p>
                <p class="team-member-bio">
                    Passionate about open-source and democratizing cloud infrastructure for
                    everyone.
                </p>
            </div>
            <div class="team-member">
                <div class="team-member-image"></div>
                <h3>John Davis</h3>
                <p>CTO</p>
                <p class="team-member-bio">
                    Experienced engineer with a background in video streaming technologies.
                </p>
            </div>
            <div class="team-member">
                <div class="team-member-image"></div>
                <h3>Alex Johnson</h3>
                <p>Head of Engineering</p>
                <p class="team-member-bio">
                    Leading our development efforts with a focus on performance and reliability.
                </p>
            </div>
            <div class="team-member">
                <div class="team-member-image"></div>
                <h3>Sam Parker</h3>
                <p>Open Source Advocate</p>
                <p class="team-member-bio">
                    Building bridges with our community and ensuring we stay true to our open-source
                    roots.
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .about-hero {
        display: flex;
        gap: 5rem;
        align-items: center;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }

        .about-hero-left {
            position: relative;
            flex-shrink: 0;
            width: 316px;
            height: 420px;
            overflow: hidden; /* Prevent overflow */

            .about-hero-image {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                :global(svg) {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            }
        }

        .about-hero-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            h1 {
                font-size: 2.25rem;
                font-weight: 600;
                line-height: 1.2;

                @media (max-width: 768px) {
                    font-size: 2.5rem;
                }
            }

            p {
                font-size: 1.125rem;
                line-height: 1.6;
                max-width: 56ch;
            }
        }
    }

    .about-team {
        margin-top: 2rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: 600;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
    }

    .team-member {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .team-member-image {
            width: 80px;
            height: 80px;
            aspect-ratio: 1;
            background-color: var(--color-brown400);
            border-radius: 50%;
            margin-bottom: 0.5rem;
        }

        h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0;
        }

        p {
            margin: 0;
            font-size: 1rem;

            &.team-member-bio {
                color: var(--color-brown600);
                margin-top: 0.5rem !important;
            }
        }
    }
</style>
