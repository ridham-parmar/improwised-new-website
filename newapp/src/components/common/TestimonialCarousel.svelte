<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import line from "$lib/images/line.svg";
  import bg from "$lib/images/testimonials/bg.svg";
  export let testimonials: any[] = [];
</script>

<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
  class="w-full flex flex-col justify-center gap-6"
>
  <Carousel.Content class="">
    {#each testimonials as testimonial, i (i)}
      {#if testimonial.data.siteImage && testimonial.data.siteImage.src}
        <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
          <div class="flex justify-center p-1 h-full">
            <Card.Root
              class="relative flex w-full max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between transition-all hover:shadow-lg h-full"
            >
              <Card.Header
                class="p-0 pr-8 pl-8 pt-8 bg-cover bg-center"
                style="background-image: url('{bg.src}');"
              >
                <img
                  src={testimonial.data.siteImage.src}
                  alt="siteImage"
                  class="w-full"
                />

              </Card.Header>
              <h2 class="font-semibold mt-5  mb-2 text-[20px] leading-[34px] text-slate-800 px-5">
                {testimonial.data.description}
              </h2>

              <Card.Footer class="block">
                <img src={line.src} alt="line" class="w-full mb-4 d-block" />

                <div
                  class="mt-10 flex items-center justify-between gap-3 w-full"
                >
                  <div class="flex-1">
                    <h2 class="font-medium text-slate-800">
                      {testimonial.data.author}
                    </h2>
                    <p class="text-sm text-slate-600">
                      {testimonial.data.authorDesignation}
                    </p>
                  </div>
                  <div class="shrink-0">
                    <img
                      src={testimonial.data.profileImage.src}
                      alt={testimonial.data.author}
                      loading="lazy"
                      decoding="async"
                      class="w-[118px] h=[60px]"
                    />
                  </div>
                </div>
              </Card.Footer>
            </Card.Root>
          </div>
        </Carousel.Item>
      {:else}
        <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
          <div class="flex justify-center p-1 h-full">
            <Card.Root
              class="relative flex w-full max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between transition-all hover:shadow-lg h-full"
            >
              <Card.Header>
                <blockquote class="text-lg [text-wrap:balance] md:text-xl mb-2">
                  {testimonial.data.description}
                </blockquote>
              </Card.Header>

              <Card.Footer class="block">
                <img
                  src={line.src}
                  alt="line"
                  loading="lazy"
                  decoding="async"
                  class="w-full mb-4 mt-4 d-block"
                />

                <div
                  class="mt-10 flex items-center justify-between gap-3 w-full"
                >
                  <div class="flex-1">
                    <h2 class="font-medium text-slate-800">
                      {testimonial.data.author}
                    </h2>
                    <p class="text-sm text-slate-600">
                      {testimonial.data.authorDesignation}
                    </p>
                  </div>
                  <div class="shrink-0">
                    <img
                      src={testimonial.data.profileImage.src}
                      alt={testimonial.data.author}
                      class="w-[118px] h=[60px]"
                    />
                  </div>
                </div>
              </Card.Footer>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/if}
    {/each}
  </Carousel.Content>
  <div class="md:absolute md:top-[-95px] right-0 flex gap-3 justify-center">
    <Carousel.Previous/>
    <Carousel.Next />
  </div>
</Carousel.Root>
