<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import line from "$lib/images/line.svg";
  import bg from "$lib/images/testimonials/bg.svg";
  export let reviews: any[] = [];

  let gradientX = 45.5;
  let gradientY = -200;

  function updateGradient(event: any) {    
    const target = event.currentTarget as HTMLElement;
    if (!target) return;

    const rect = event?.currentTarget?.getBoundingClientRect();
    gradientX = event.clientX - rect.left;
    gradientY = event.clientY - rect.top;

    target.style.setProperty("--gradient-x", `${gradientX}px`);
    target.style.setProperty("--gradient-y", `${gradientY}px`);
  }
</script>

<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}

  class="w-full flex flex-col justify-center gap-6 md:mt-10"
>
  <Carousel.Content>
    {#each reviews as review, i (i)}
      <Carousel.Item
        class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center w-full"
      >
        <div class="flex justify-center p-1">
          <Card.Root
            onmousemove={updateGradient}
            style={`--gradient-x: ${gradientX}px; --gradient-y: ${gradientY}px`}
            class="overflow-hidden border-1 bg-card-bg border-card-border rounded-[20px] relative flex w-full max-w-md  flex-col justify-between hover:shadow-lg h-full"
          >
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
              class="card-custom-inner flex flex-col h-full"
            >
              <Card.Content class="small-text md:text-para font-inter flex-grow text-fourth-color">
                <p>{review.review}</p>
              </Card.Content>
              <Card.Footer class="flex items-center justify-between gap-4 mt-4">
                <div class="flex justify-center items-center gap-2">
                  <div>
                    <img
                      alt={review.image.src}
                      src={review.image.src}
                      class="w-[64px] h-[64px] object-cover object-top border-1 border-[#D3D3D3] rounded-full reviews"
                    />
                  </div>
                  <div>
                    <p class="font-semibold text-base font-inter text-fifth-color">
                      {review.name}
                    </p>
                    <p class="text-sm font-inter text-fourth-color">
                      {review.position}
                    </p>
                  </div>
                </div>
              </Card.Footer>
            </div>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>

  <div class="flex gap-3 justify-center md:mt-10">
    <Carousel.Previous />
    <Carousel.Next />
  </div>
</Carousel.Root>
