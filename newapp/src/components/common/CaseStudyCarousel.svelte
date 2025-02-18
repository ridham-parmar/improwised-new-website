<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import line from "$lib/images/line.svg";
  import bg from "$lib/images/testimonials/bg.svg";
  export let casestudies: any[] = [];
</script>

<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
  class="w-11/12"
>
  <Carousel.Content>
    {#each casestudies as casestudy, i (i)}
      <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
        <div class="p-1 h-full">
          <Card.Root
            class="relative flex w-full max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between transition-all hover:shadow-lg h-full"
          >
            <Card.Header class="mb-4">
              <span
                class="mb-2 font-bold font-manrope text-[16px] leading-[24px] tracking-[16%] text-[#737373] uppercase"
              >
                {casestudy.data.category}</span
              >
              <h2
                class="mb-2 font-bold font-manrope text-[28px] leading-[34px] tracking-[0.02em] text-[#141414]"
              >
                {casestudy.data.title}
              </h2>
              <blockquote class="text-para">
                {casestudy.data.description}
              </blockquote>
            </Card.Header>

            <Card.Footer class="block">
              <img src={line.src} alt="line" class="w-full mt-4 d-block" />

              <div class="mt-6 flex items-center justify-between gap-3 w-full">
                <div class="flex-1">
                  <h2 class="font-manrope font-bold text-[40px] text-[#549F57]">
                    {casestudy.data.saveCost}
                  </h2>
                  <p class="text-para">Saved in operational costs</p>
                </div>
              </div>
            </Card.Footer>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <!-- <Carousel.Previous class="absolute top-[-80px] left-[98%]" />
  <Carousel.Next class="absolute top-[-80px]" /> -->
</Carousel.Root>
