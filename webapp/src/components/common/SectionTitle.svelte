<script lang="ts">
    import { cn } from "$lib/utils.js";
    export let text: string;
    let className: string | undefined | null = undefined;
    export let dataAos: string = "fade-up";
    export { className as class };
    const computedClass = cn
        ? cn(
              "mb-6 max-md:text-center text-4xl font-bold lg:text-5xl lg:tracking-tight",
              className,
          )
        : `mb-6 max-md:text-center text-4xl font-bold lg:text-5xl lg:tracking-tight ${className}`.trim();
</script>

<h1 class={computedClass} data-aos={dataAos}>
    {text}
</h1>
