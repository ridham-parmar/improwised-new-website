<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	type $$Props = AccordionPrimitive.ItemProps;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"];
	export { className as class };
</script>

<AccordionPrimitive.Item {value} class={cn("border-b border-[#e5e5e5] dark:border-[#1f1f1f]", className)} {...$$restProps}>
	<slot />
</AccordionPrimitive.Item>
