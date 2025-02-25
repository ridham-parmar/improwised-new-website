<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { HeadingLevel } from "./index.js";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props["class"] = undefined;
	export let tag: $$Props["tag"] = "h3";
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn("text-[18px] text-[#141414] leading-[22px] md:text-[28px] md:leading-[32px] tracking-[0.02em] font-manrope", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
