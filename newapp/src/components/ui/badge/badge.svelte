<script lang="ts">
	import { type Variant, badgeVariants } from "./index.js";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export let variant: Variant = "default";
	export { className as class };

	const computedClass = cn
        ? cn(
              "border border-[#494848] rounded-full text-[#494848] mb-4 ring-gray-100 uppercase",
              className,
          )
        : `border border-[#494848] rounded-full text-[#494848] mb-4 ring-gray-100 uppercase  ${className}`.trim();
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
