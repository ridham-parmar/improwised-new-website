<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  export let casestudies: any[] = [];
</script>

<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
  class="w-full flex flex-col justify-center p-1"
>
  <Carousel.Content>
    {#each casestudies as casestudy, i (i)}
      <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
        <div class="flex justify-center h-full">
          <Card.Root>
            <div class="">
              <Card.Header class="md:p-0">
                <img
                  alt="feature"
                  class="w-full rounded-t-[12px]"
                  src={casestudy.data.image.src}
                />
              </Card.Header>
              <Card.Content class="md:pb-2">
                <span
                  class="font-bold font-manrope text-[16px] leading-[24px] tracking-[16%] text-[#737373] uppercase"
                >
                  {casestudy.data.category}</span
                >
                <Card.Title
                  class="mb-4 mt-2 font-bold font-manrope text-[20px] leading-[26px] tracking-[0.02em] text-[#141414]"
                >
                  {casestudy.data.title}
                </Card.Title>
                <p
                  class=" text-[16px] leading-[26px] tracking-[0.02em] text-[#292929]"
                >
                  {casestudy.data.description}
                </p>
              </Card.Content>
              <Card.Footer class="mt-4 flex justify-between">
                <div class="flex flex-wrap gap-2">
                  {#each casestudy.data.tags as tag}
                    <span
                      class="text-[16px] leading-[26px] tracking-[0.01em] text-[#525252] bg-[#F5F5F5] px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  {/each}
                </div>
              </Card.Footer>
            </div>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  {#if casestudies.length > 3}
    <div
      class="md:absolute md:top-[-95px] right-0 flex max-md:mt-2 gap-3 justify-center"
    >
      <Carousel.Previous class="bg-black text-white" />
      <Carousel.Next class="bg-black text-white" />
    </div>
  {/if}
</Carousel.Root>
