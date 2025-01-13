<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  export let imageFiles: any[] = [];
</script>

<Carousel.Root
  opts={{
    align: "start",
  }}
  class="w-full"
>
  <Carousel.Content>
    {#each imageFiles as imageFile, i (i)}
      <Carousel.Item class="md:basis-1/2 max-md:basis-1/2 lg:basis-1/4">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex items-center justify-center p-2"
            >


            <div class=" image-container  overflow-hidden aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
              <img  src={imageFile.default.src} alt="about images" class="rounded w-full h-full">
            </div>

            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous class="max-md:left-2" />
  <Carousel.Next  class="max-md:right-2"/>
</Carousel.Root>

<!--
<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
  plugins={[
    Autoplay({
      delay: 5000
    }),
  ]}

  class="w-full"
>
  <Carousel.Content class="">
    {#each imageFiles as imageFile, i (i)}

      <Carousel.Item class="image-container ">


          <img
          src={imageFile.default.src}
          alt="sfsd"
          class="card-img-top"
        />

      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root> -->
