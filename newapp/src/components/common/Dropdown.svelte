<script lang="ts">
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { BASE_URL } from "$lib/consts";
  export let services: string | any[] = [];
</script>

<DropdownMenu.Root preventScroll={false}>
  <DropdownMenu.Trigger class="flex items-center space-x-1">
    <span>Service</span>
    <ChevronRight class="w-4 h-4" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="start" class="rounded-[6px]  border-0 inset-shadow-sm inset-shadow-sky-100/50 ring-2 ring-sky-100/50 p-[15px]">
    <DropdownMenu.Group>
      {#if services.length > 0}
        {#each services as service}
          <DropdownMenu.Item class="p-3">
            <a  href={`${BASE_URL}/services/${service?.data.slug}`}  aria-label="Learn more about our services on the service page">
              {service?.data?.title}
            </a>
          </DropdownMenu.Item>
        {/each}
      {/if}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
