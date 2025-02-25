<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div class={cn("flex flex-col gap-2 md:gap-6 px-5 md:px-10 pt-8 mb-6 md:pt-6 md:pb-8", className)} {...$$restProps}>
	<slot />
</div>
