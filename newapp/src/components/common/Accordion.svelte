<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import { innerWidth } from "svelte/reactivity/window";

  export let faqs: { question: string; answer: string }[] = [];
  export let blocks : {title: string; slug:string; description: string}[] = [];  
  export let baseUrl : string = "";
  export let servicePage : string = "";
  export let visibleContent : string = "";

</script>

<div>
  {#if blocks.length > 0}
    {#each blocks as block}
      <button class="flex border-b flex-col group cursor-pointer w-full pb-3" onclick={(event) => {
        if(innerWidth.current as number < 768) {
          visibleContent = visibleContent == block.title ? "" : block.title
        } else {
          event.stopPropagation()
        }
      }}>
        <div class="flex justify-between pt-4 pb-2 md:py-4 text-left text-first-color font-bold text-[16px] leading-[22px] md:text-[22px] md:leading-[28px] tracking-[0.02em] font-manrope">
          <div>{block.title}</div>
          <div>
            <ChevronDown class={`h-6 w-6 transition-transform duration-300 text-first-col md:group-hover:rotate-180 ${visibleContent == block.title ? "max-md:rotate-180" : ""}`} />
          </div>
        </div>

        <div class={`grid transition-all duration-300 ease-in-out md:group-hover:grid-rows-[1fr] grid-rows-[0fr]
        ${visibleContent == block.title ? "max-md:grid-rows-[1fr]" : ""}`}>
          <div class="overflow-hidden">
            <p class="text-left small-text font-inter md:text-para text-third-color">
              {#if servicePage === 'platform-engineering'}
                {block.description.substring(0,100)}...
                <a class="underline text-first-color hover:text-blue-hover" {...(servicePage === 'platform-engineering' && {
                  href: `${baseUrl}/services/${servicePage}/${block.slug}/`
                })}>read more</a>
              {:else}
                {block.description}
              {/if}
            </p>
          </div>
        </div>
      </button>
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

