<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  export let faqs: { question: string; answer: string }[] = [];
</script>

<Accordion.Root >
  {#each faqs as faq (faq.question)}
    <Accordion.Item value={faq.question}>
      <Accordion.Trigger class="no-underline hover:no-underline text-[24px] leading-[28px] text-[#141414] font-manrope">{faq.question}
      </Accordion.Trigger>
      <Accordion.Content class="text-para">{faq.answer}</Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>
