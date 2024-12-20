<script lang="ts">
	import { type Variant, badgeVariants } from "./index.js";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export let variant: Variant = "default";
	export { className as class };
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	{...$$restProps}
><span class="flex items-center gap-2"><svg

	class="inline dark:text-primary-300 h-3 text-primary-600 w-3 "
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width="2"
	aria-hidden="true"
	><path
		d="M0 0h24v24H0z"
		stroke="none"></path><path
		d="M6 21 21 6l-3-3L3 18l3 3M15 6l3 3M9 3a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2M19 13a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2"
	></path></svg
	>
 <slot /></span>
</svelte:element>
