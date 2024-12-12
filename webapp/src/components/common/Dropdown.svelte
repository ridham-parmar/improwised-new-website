<script lang="ts">
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger class="flex items-center space-x-1">
    <span>Service</span>
    <ChevronRight class="w-4 h-4" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Item>Platform Engineering</DropdownMenu.Item>
      <DropdownMenu.Item>Cloud Infrastructure Services</DropdownMenu.Item>
      <DropdownMenu.Item>Product Modernization</DropdownMenu.Item>
      <DropdownMenu.Item>Technology Consulting</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
