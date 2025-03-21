<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { BASE_URL } from "$lib/consts";
    import Autoplay from "embla-carousel-autoplay";
  export let blogs: any[] = [];
  console.log(blogs.length);
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
  class="w-full flex flex-col justify-center gap-6 mt-48"
>
  <Carousel.Content>
    {#each blogs as featuredBlog, i (i)}

      <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
        <div class="flex items-center gap-2">
          <a href={BASE_URL + "/blog/" + featuredBlog.data.slug}> <img
            alt="feature"
            class="bg-white p-1 shadow-nav"
            width={90}
            height={70}
            src={featuredBlog.data.image.src}
          >
          </a>
          <p
            class="text-left  text-[#292929] text-[14px] leading-[18px] tracking-tight"
          >
            {featuredBlog.data.tags[0]}
            <br />
            <span
              class="text-left mt-2 font-manrope text-[#141414] text-[16px] leading-[22px] tracking-tight"
            >
            <a href={BASE_URL + "/blog/" + featuredBlog.data.slug}>
              {featuredBlog.data.title.length > 50
                ? featuredBlog.data.title.slice(0, 50) + "..."
                : featuredBlog.data.title}
             </a>
            </span>
          </p>
        </div>

      </Carousel.Item>
    {/each}
  </Carousel.Content>
</Carousel.Root>
