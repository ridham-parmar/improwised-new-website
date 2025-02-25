<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Accordion.Root class="text-left">
  <Accordion.Item value="item-1" class="py-6 md:py-10">
    <Accordion.Trigger
      class="text-left gap-4 hover:no-underline py-0 font-inter font-semibold text-base md:text-xl text-[#141414]"
      >What roles are currently open at Improwised ?</Accordion.Trigger
    >
    <Accordion.Content
      class="pt-4 font-inter font-normal text-small md:text-lg leading-[26px] text-[#292929]"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dicta
      totam officia ipsam harum eaque, saepe eos! Sit debitis atque provident
      molestiae deserunt odio cumque.</Accordion.Content
    >
  </Accordion.Item>
  <Accordion.Item value="item-2" class="py-6 md:py-10">
    <Accordion.Trigger
      class="text-left gap-4 hover:no-underline py-0 font-inter font-semibold text-base md:text-xl text-[#141414]"
      >Do you offer remote or hybird work options ?</Accordion.Trigger
    >
    <Accordion.Content
      class="pt-4 font-inter font-normal text-small md:text-lg leading-[26px] text-[#292929]"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3" class="py-6 md:py-10">
    <Accordion.Trigger
      class="text-left gap-4 hover:no-underline py-0 font-inter font-semibold text-base md:text-xl text-[#141414]"
      >How do I apply for the position ?</Accordion.Trigger
    >
    <Accordion.Content
      class="pt-4 font-inter font-normal text-small md:text-lg leading-[26px] text-[#292929]"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odio
      doloremque modi minima, tempore quis.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-4" class="py-6 md:py-10">
    <Accordion.Trigger
      class="text-left gap-4 hover:no-underline py-0 font-inter font-semibold text-base md:text-xl text-[#141414]"
      >What is the requirement process like ?</Accordion.Trigger
    >
    <Accordion.Content
      class="pt-4 font-inter font-normal text-small md:text-lg leading-[26px] text-[#292929]"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odio
      doloremque modi minima, tempore quis.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-5" class="py-6 md:py-10">
    <Accordion.Trigger
      class="text-left gap-4 hover:no-underline py-0 font-inter font-semibold text-base md:text-xl text-[#141414]"
      >How long does the recruitment process take ?</Accordion.Trigger
    >
    <Accordion.Content
      class="pt-4 font-inter font-normal text-small md:text-lg leading-[26px] text-[#292929]"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odio
      doloremque modi minima, tempore quis.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
