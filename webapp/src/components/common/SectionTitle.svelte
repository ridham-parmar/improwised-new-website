<script lang="ts">
    import { cn } from "$lib/utils.js";
    export let text: string;
    export let primaryColorText: string;
    let className: string | undefined | null = undefined;
    export let dataAos: string = "fade-up";
    export { className as class };
    const computedClass = cn
        ? cn(
              "mb-6 max-md:text-center text-5xl md:text-3xl leading-[3.5rem] font-bold lg:tracking-tight custom-line-height",
              className,
          )
        : `mb-6  max-md:text-center text-5xl  md:text-3xl leading-[3.5rem] font-bold lg:tracking-tight custom-line-height ${className}`.trim();
</script>

<h1 class={computedClass} data-aos={dataAos}>
    {text}
    {#if primaryColorText}
        <span class="text-primary">{primaryColorText}</span>
    {/if}
</h1>
