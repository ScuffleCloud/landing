<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLLabelAttributes } from "svelte/elements";

	type Props = {
		value?: string;
		type?: "text" | "email" | "password" | "textarea";
		placeholder?: string | null;
		big?: boolean;
		disabled?: boolean;
		children?: Snippet;
		icon?: Snippet;
		onkeypress?: (e: KeyboardEvent) => void;
	} & HTMLLabelAttributes;

	let {
		value = $bindable(),
		type = "text",
		placeholder = null,
		big = false,
		disabled = false,
		children,
		icon,
		onkeypress,
		...restProps
	}: Props = $props();

	// svelte-ignore non_reactive_update
	let input: HTMLElement;

	export function focus() {
		input?.focus();
	}
</script>

<label class="input" class:big class:has-label={children} class:has-icon={icon} {...restProps}>
	{@render children?.()}
	{#if icon}
		<div class="icon">
			{@render icon()}
		</div>
	{/if}
	{#if type === "text"}
		<input type="text" bind:value {placeholder} {onkeypress} {disabled} bind:this={input} />
	{:else if type === "email"}
		<input type="email" bind:value {placeholder} {onkeypress} {disabled} bind:this={input} />
	{:else if type === "password"}
		<input type="password" bind:value {placeholder} {onkeypress} {disabled} bind:this={input} />
	{:else if type === "textarea"}
		<textarea bind:value {placeholder} {onkeypress} {disabled} bind:this={input}></textarea>
	{/if}
</label>

<style lang="scss">
	.input {
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

        &:focus {
            background: white;
            border-color: rgba(0, 0, 0, 0.2);
        }
    }
</style>