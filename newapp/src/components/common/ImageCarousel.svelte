<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Autoplay from "embla-carousel-autoplay";
  export let images: any[] = []
</script>

<Carousel.Root
opts={{
  align: "start",
  loop: true,
}}
plugins={[
  Autoplay({
    delay:4000
  }),
]}
  class="w-full flex flex-col justify-center gap-6 md:mt-10"
>
  <Carousel.Content>
    {#each images as image, i (i)}
      {#if (i < (images.length/2) && (images.length % 2 == 0)) || (i <= (images.length/2) && (images.length % 2 != 0))}
        <Carousel.Item class="md:basis-1/2 lg:basis-1/3 h-[620px]">
          <div class="flex flex-col gap-4 h-full">
            <div class={`max-md:flex max-md:justify-center relative rounded-[8px] overflow-hidden ${i % 2 == 0 ? "h-2/5" : "h-3/5"}`}>
              <img
                alt="life-images"
                class={`max-w-[452px] rounded-[8px] min-w-[452px] object-cover object-center max-h-full ${i % 2 == 0 ? "min-h-[235px]" : "min-h-[413px]"}`}
                src={images[i].src}
              />
            </div>
            <div class={`max-md:flex max-md:justify-center relative rounded-[8px] overflow-hidden ${i % 2 == 0 ? "h-3/5" : "h-2/5"}`}>
              <img
                alt="life-images"
                class={`max-w-[452px] rounded-[8px] min-w-[452px] object-cover object-center max-h-full ${i % 2 == 0 ? "min-h-[413px]" : "min-h-[235px]"}`}
                src={images[(images.length - (i+1))].src}
              />
            </div>
          </div>
        </Carousel.Item>
      {/if}
    {/each}
  </Carousel.Content>

  <div class="flex gap-3 justify-center md:mt-10">
    <Carousel.Previous />
    <Carousel.Next />
  </div>
</Carousel.Root>
