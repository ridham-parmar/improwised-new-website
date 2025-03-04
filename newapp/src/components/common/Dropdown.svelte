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
  <DropdownMenu.Content class="drop-shadow-lg">
    <DropdownMenu.Group>
      {#if services.length > 0}
        {#each services as service}
          <DropdownMenu.Item>
            <a href="{BASE_URL}/services/{service?.data.slug}">
              {service?.data?.title}
            </a>
          </DropdownMenu.Item>
        {/each}
      {/if}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
