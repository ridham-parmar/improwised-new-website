<script lang="ts">
    import { cn } from "$lib/utils.js";
    export let text: string;
    let className: string | undefined | null = undefined;
    export let dataAos: string = "fade-up";
    export { className as class };
    const computedClass = cn
        ? cn(
              "mb-6 max-md:text-center text-5xl md:text-6xl font-medium",
              className,
          )
        : `mb-6 max-md:text-center text-5xl md:text-6xl font-medium ${className}`.trim();
</script>

<h1 class={computedClass} data-aos={dataAos}>
    {text}
</h1>
