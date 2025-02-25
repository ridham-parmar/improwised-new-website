<script lang="ts">
    import { cn } from "$lib/utils.js";
    export let text: string;
    export let primaryColorText: string;
    export let isPrimaryTextInitial: boolean;
    let className: string | undefined | null = undefined;
    export let dataAos: string = "fade-up";
    export { className as class };
    const computedClass = cn
        ? cn(
              "mb-6 max-md:text-center font-manrope text-[32px] md:text-[46px] leading-[36px] -tracking-2 md:leading-[52px] font-bold text-[#141414]",
              className,
          )
        : `mb-6  max-md:text-center font-manrope text-[32px] md:text-[46px] leading-[36px] -tracking-2 md:leading-[52px] font-bold text-[#141414]   ${className}`.trim();
</script>

<h1 class={computedClass} data-aos={dataAos}>
    {#if isPrimaryTextInitial && primaryColorText}
        <span class="text-primary">{primaryColorText}</span>
    {/if}
    {text}
    {#if !isPrimaryTextInitial && primaryColorText}
        <span class="text-primary">{primaryColorText}</span>
    {/if}
</h1>
