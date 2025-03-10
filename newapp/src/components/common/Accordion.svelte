<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  export let faqs: { question: string; answer: string }[] = [];

  export let blocks : {title: string; description: string}[] = [];  
  
</script>

<Accordion.Root >
  {#if blocks.length > 0}
    {#each blocks as block (block.title)}
      <Accordion.Item value={block.description} class="" >
        <Accordion.Trigger class="no-underline hover:cursor-pointer font-bold text-left hover:no-underline py-4 md:py-6 text-[#141414] text-[16px] leading-[22px] md:text-[22px] md:leading-[28px] tracking-[0.02em] font-manrope">{block.title}
        </Accordion.Trigger>
        <Accordion.Content class="text-left"><p class="pb-4 text-left small-text font-inter md:text-para">{block.description}</p></Accordion.Content>
      </Accordion.Item>
    {/each}
  {:else} 
    {#each faqs as faq (faq.question)}
      <Accordion.Item value={faq.question} class="" >
        <Accordion.Trigger class="no-underline hover:cursor-pointer font-bold text-left hover:no-underline py-4 md:py-6 text-[#141414] text-[16px] leading-[22px] md:text-[22px] md:leading-[28px] tracking-[0.02em] font-manrope">{faq.question}
        </Accordion.Trigger>
        <Accordion.Content class="text-left"><p class="pb-4 text-left small-text font-inter md:text-para">{faq.answer}</p></Accordion.Content>
      </Accordion.Item>
    {/each}
  {/if}
</Accordion.Root>
