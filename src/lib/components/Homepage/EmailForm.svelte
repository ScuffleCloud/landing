<script lang="ts">
import Pill from '$lib/design-components/Pill.svelte';
    import { theme } from '$lib/theme';
</script>

<div class="rectangle">
    <div class="update-banner">
        <div style="padding: 0px 8px;">
            <p class="title">Receive an Update when we&apos;ll go live!</p>
            <p class="subtitle">News from the Scuffle Engineering Team</p>
        </div>
        <div class="entry-field-container">
            <input class="entry-field" placeholder="Your email address" type="email">
            <Pill color={theme.colors.brown600}>
                <p class="button-text">Subscribe</p>
            </Pill>
        </div>
    </div>
</div>

<style lang="scss">
    .rectangle {
        position: relative;
        display: flex;
        align-items: center;
        padding: 48px;
        border-radius: 16px;
        background-color: var(--color-orange500);
    }

    .update-banner {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 16px;
        gap: 16px;
        height: 100%;
        width: 100%;
        max-width: 400px;
        background-color: var(--color-peach600);
    }

    .title {
        color: var(--color-brown800);
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.5;
        margin: 0;
    }

    .subtitle {
        color: var(--color-brown600);
        line-height: 1.5;
        margin: 0;
        
    }

    .button-text {
        color: var(--color-light100);
        font-weight: bold;
        margin: 0;
    }

    .entry-field-container {
        display: flex;
        justify-content: center;
        gap: 8px;
    }

    .entry-field {
        padding: 12px 16px;
        border-radius: 100px;
        border: 1px solid #FFDBB9;
        width: 100%;
        outline: none;
        transition: all 0.2s ease;
        background-color: inherit;

        &::placeholder {
            color: rgba(0, 0, 0, 0.6);
        }

    }
</style>