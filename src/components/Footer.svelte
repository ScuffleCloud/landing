<script>
    import {
        PUBLIC_BLOG_URL,
        PUBLIC_BLUESKY_URL,
        PUBLIC_GITHUB_REPO_URL,
        PUBLIC_TWITTER_URL,
    } from '$env/static/public';
</script>

<footer class="container">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Company</h3>
            <nav>
                <a href="/about">About</a>
                <!-- <a href="/contact">Contact</a> -->
                <!-- <a href="/brand">Brand</a> -->
                <!-- <a href="/partner">Partner</a> -->
                <!-- <a href="/contribute">Contribute</a> -->
            </nav>
        </div>

        <div class="footer-section">
            <h3>Resources</h3>
            <nav>
                <a href={PUBLIC_BLOG_URL} target="_blank">Blog</a>
                <a href={PUBLIC_GITHUB_REPO_URL} target="_blank">GitHub Repository</a>
            </nav>
        </div>

        <div class="footer-section">
            <h3>Legal</h3>
            <nav>
                <!-- <a href="/licenses">Licenses</a> -->
                <!-- <a href="/terms">Term & Conditions</a> -->
                <!-- <a href="/sla">Service Level Agreement</a> -->
            </nav>
        </div>

        <div class="footer-section">
            <h3>Follow Scuffle</h3>
            <nav>
                <a href={PUBLIC_GITHUB_REPO_URL} target="_blank">Github</a>
                <a href={PUBLIC_TWITTER_URL} target="_blank">Twitter</a>
                <a href={PUBLIC_BLUESKY_URL} target="_blank">Bluesky</a>
            </nav>
        </div>
    </div>
</footer>

<style>
    .container {
        padding: 6rem var(--layout-padding);
        max-width: var(--layout-width);
        margin: 0 auto;
        width: 100%;

        .footer-content {
            display: grid;
            grid-template-columns: repeat(4, minmax(auto, 14rem));
            max-width: var(--layout-width);
            padding: 0 1rem;
            justify-content: space-between;

            /* for gap in 2x2 layout */
            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }
        }
    }

    .footer-section {
        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        nav {
            display: flex;
            flex-direction: column;
            line-height: 2rem;

            a {
                font-size: 1.125rem;
                padding: 0.5rem 0;
            }
        }
    }

    /* Can't define breakpoint variables without scss. 768px is a common breakpoint for mobile devices */
    @media (max-width: 768px) {
        .footer-content {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1rem;
        }
    }
</style>
