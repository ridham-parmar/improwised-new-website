<script lang="ts">
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  // import { BASE_URL } from "$lib/consts";
  export let services: string | any[] = [];
  export let baseUrl: string = "";
</script>

<DropdownMenu.Root preventScroll={false}>
  <DropdownMenu.Trigger class="flex items-center space-x-1  hover:cursor-pointer">
    <span class="small-text text-first-color hover:text-blue-hover">Service</span>
    <ChevronRight class="w-4 h-4" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="start" class="rounded-[6px] backdrop-blur-[16px] bg-navbar-bg border-0 p-[15px]">
    <DropdownMenu.Group>
      {#if services.length > 0}
        {#each services as service}
          <DropdownMenu.Item class="p-3 small-text text-first-color hover:text-blue-hover">
            <a href={`${baseUrl}/services/${service?.data.slug}`}  aria-label="Explore ${service?.data?.title}">
              {service?.data?.title || 'Service Details'}
            </a>
          </DropdownMenu.Item>
        {/each}
      {/if}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
