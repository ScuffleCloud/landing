<script>
    import { BLOG_URL, BLUESKY_URL, GITHUB_REPO_URL, TWITTER_URL } from '$lib/consts';
</script>

<footer class="container">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Company</h3>
            <nav>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/brand">Brand</a>
                <a href="/partner">Partner</a>
                <a href="/contribute">Contribute</a>
            </nav>
        </div>

        <div class="footer-section">
            <h3>Resources</h3>
            <nav>
                <a href={BLOG_URL}>Blog</a>
                <a href={GITHUB_REPO_URL}>GitHub Repository</a>
            </nav>
        </div>

        <div class="footer-section">
            <h3>Legal</h3>
            <nav>
                <a href="/licenses">Licenses</a>
                <a href="/terms">Term & Conditions</a>
                <a href="/sla">Service Level Agreement</a>
            </nav>
        </div>

        <div class="footer-section">
            <h3>Follow Scuffle</h3>
            <nav>
                <a href={GITHUB_REPO_URL}>Github</a>
                <a href={TWITTER_URL}>Twitter</a>
                <a href={BLUESKY_URL}>Bluesky</a>
            </nav>
        </div>
    </div>
</footer>

<style>
    .container {
        padding: 3rem var(--layout-padding);
        background-color: var(--color-white);
    }

    .footer-content {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, minmax(auto, 14rem));
        max-width: var(--layout-width);
        padding: 0 1rem;
        justify-content: center;

        /* for gap in 2x2 layout */
        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
    }

    .footer-section {
        h3 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        nav {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            a {
                font-size: 0.875rem;
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
