
<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    export let testimonials: any[] = [];
  </script>

  <Carousel.Root
    opts={{
      align: "start",
      loop: true,
    }}
    plugins={[
      Autoplay({
        delay: 2000
      }),
    ]}

    class="w-11/12"
  >
    <Carousel.Content class="">
      {#each testimonials as testimonial, i (i)}

        <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
          <div class="p-1 h-full">
            <Card.Root class="relative flex w-full max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between transition-all hover:shadow-lg h-full">
              <Card.Header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 419"
                  class="bg-shape-custom"
                >
                  <defs>
                    <clipPath id="clip0_302_2944">
                      <path
                        fill="#fff"
                        d="M0 0H800V419H0z"
                        transform="matrix(-1 0 0 1 800 0)"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip0_302_2944)">
                    <g stroke="currentColor" stroke-opacity="0.1">
                      <path d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495" />
                      <path d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489" />
                      <path d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503" />
                      <path d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479" />
                    </g>
                  </g>
                </svg>
                <blockquote class="text-lg [text-wrap:balance] md:text-xl">
                  {testimonial.data.description}
                </blockquote>
              </Card.Header>

              <Card.Footer>
                <div class="mt-10 flex items-center gap-3">
                  <div class="shrink-0">
                    <img
                      src={testimonial.data.profileImage.src}
                      alt={testimonial.data.author}
                      class="h-12 w-12 rounded-full bg-slate-100 object-cover"
                    />
                  </div>
                  <div>
                    <h2 class="font-medium text-slate-800">
                      {testimonial.data.author}
                    </h2>
                    <p class="text-sm text-slate-600">
                      {testimonial.data.authorDesignation}
                    </p>
                  </div>
                </div>
              </Card.Footer>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
