<script lang="ts">
    import type { Snippet } from 'svelte';

    type HideOnProps = {
        mobileXS?: boolean;
        mobile?: boolean;
        tablet?: boolean;
        ds?: boolean;
        dm?: boolean;
        dl?: boolean;
        children: Snippet;
    };

    let {
        mobileXS = false,
        mobile = false,
        tablet = false,
        ds = false,
        dm = false,
        dl = false,
        children,
    }: HideOnProps = $props();

    const className = [
        'hide-on',
        {
            'hide-mobile-xs': mobileXS,
            'hide-mobile': mobile,
            'hide-tablet': tablet,
            'hide-ds': ds,
            'hide-dm': dm,
            'hide-dl': dl,
        },
    ];
</script>

<div class={className}>
    {@render children()}
</div>

<style>
    .hide-on {
        display: contents;
    }
</style>
