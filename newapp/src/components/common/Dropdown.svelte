<script lang="ts">
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { BASE_URL } from "$lib/consts";
  export let services: string | any[] = [];
</script>

<DropdownMenu.Root preventScroll={false}>
  <DropdownMenu.Trigger class="flex items-center space-x-1 hover:cursor-pointer">
    <span>Service</span>
    <ChevronRight class="w-4 h-4" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="start" class="rounded-[6px] backdrop-blur-[12px] bg-[#ffffff4d] border-0 p-[15px]">
    <DropdownMenu.Group>
      {#if services.length > 0}
        {#each services as service}
          <DropdownMenu.Item class="p-3 text-[#141414] hover:text-primary">
            <a href={`${BASE_URL}/services/${service?.data.slug}`}  aria-label="Learn more about ${service?.data?.title}">
              {service?.data?.title}
            </a>
          </DropdownMenu.Item>
        {/each}
      {/if}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
