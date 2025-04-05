<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  import ChevronDown from "lucide-svelte/icons/chevron-down";

  export let faqs: { question: string; answer: string }[] = [];
  export let blocks : {title: string; slug:string; description: string}[] = [];  
  export let baseUrl : string = "";
  export let servicePage : string = "";
</script>

<div>
  {#if blocks.length > 0}
    {#each blocks as block}
      <a class="relative" {...(servicePage === 'platform-engineering' && {
        href: `${baseUrl}/services/${servicePage}/${block.slug}`
      })}>
        <div class="flex border-b flex-col group cursor-pointer">
          <div class="flex justify-between py-4 md:py-6 text-first-color font-bold text-[16px] leading-[22px] md:text-[22px] md:leading-[28px] tracking-[0.02em] font-manrope">
            <div>{block.title}</div>
            <div>
              <ChevronDown class="h-6 w-6 transition-transform duration-300 text-first-col group-hover:rotate-180" />
            </div>
          </div>

          <div class="grid transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] grid-rows-[0fr]">
            <div class="overflow-hidden line-clamp-2 mb-4">
              <p class="text-left small-text font-inter md:text-para text-third-color">{block.description}</p>
              <span>read more</span>
            </div>
          </div>

        </div>
      </a>
    {/each}
  {:else}
    <Accordion.Root >
      {#each faqs as faq (faq.question)}
        <Accordion.Item value={faq.question} class="" >
          <Accordion.Trigger class="no-underline hover:cursor-pointer font-bold text-left hover:no-underline py-4 md:py-6 text-first-color text-[16px] leading-[22px] md:text-[22px] md:leading-[28px] tracking-[0.02em] font-manrope">{faq.question}
          </Accordion.Trigger>
          <Accordion.Content class="text-left"><p class="pb-4 text-left small-text font-inter md:text-para text-third-color">{faq.answer}</p></Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  {/if}
</div>

