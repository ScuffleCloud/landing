<script>
    import { PUBLIC_CAL_COM_URL } from '$env/static/public';
    import Pill from '$lib/design-components/Pill.svelte';
    import BackButton from '$lib/images/BackButton.svelte';
    import { theme } from '$lib/theme';
</script>

<a href={PUBLIC_CAL_COM_URL} class="pill-link" target="_blank">
    <Pill color={theme.colors.orange500} width="100%">
        <div class="demo-pill-container">
            <p class="demo-text">Get a demo</p>
            <BackButton />
        </div>
    </Pill>
</a>

<style>
    .pill-link {
        text-decoration: none;
        width: 100%;

        .demo-pill-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;

            .demo-text {
                font-weight: 600;
                white-space: nowrap;
            }
        }
    }
</style>
