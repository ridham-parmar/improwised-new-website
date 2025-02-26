<script lang="ts">
	import ArrowRight from "lucide-svelte/icons/arrow-right";
	import type { VariantProps } from "tailwind-variants";
	import { getEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";
	import {
		Button,
		type Props,
		type buttonVariants,
	} from "$lib/components/ui/button/index.js";

	type $$Props = Props;

	let className: $$Props["class"] = undefined;
	export { className as class };
	export let variant: VariantProps<typeof buttonVariants>["variant"] = "outline";
	export let size: VariantProps<typeof buttonVariants>["size"] = "icon";

	const { orientation, canScrollNext, scrollNext, handleKeyDown } =
		getEmblaContext("<Carousel.Next/>");
</script>

<Button
	{variant}
	{size}
	class={cn(
		"h-[52px] w-[52px] rounded-xl border border-[#E5E5E5] hover:bg-[#141414] hover:text-[#fff] hover:border-slate-600",
		className
	)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<ArrowRight class="h-6 w-6" />
	<span class="sr-only">Next slide</span>
</Button>

