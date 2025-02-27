<script lang="ts">
	import { type Variant, badgeVariants } from "./index.js";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export let variant: Variant = "default";
	export { className as class };

	const computedClass = cn
        ? cn(
              "border border-[#737373] rounded-full text-[#737373] mb-4 ring-gray-300 uppercase",
              className,
          )
        : `border border-[#737373] rounded-full text-[#737373] mb-4 ring-gray-300 uppercase  ${className}`.trim();
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
	class={cn(
		badgeVariants({ variant, className }),
		className,
		computedClass
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
