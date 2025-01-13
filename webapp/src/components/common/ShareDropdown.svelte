<script lang="ts">
    import ChevronRight from "lucide-svelte/icons/chevron-right";
    import ExternalLink from "lucide-svelte/icons/external-link";
    import Facebook from "lucide-svelte/icons/facebook";
    import Linkedin from "lucide-svelte/icons/linkedin";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
   </script>

  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="flex items-center space-x-1">
      <span><ExternalLink class="text-primary w-8 h-8"/></span>

    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <DropdownMenu.Item><a href="#" class="flex"><ExternalLink class="w-4 h-4 mr-1"/>Copy Link</a></DropdownMenu.Item>
        <DropdownMenu.Item><a href="#"  class="flex"><Linkedin  class="w-4 h-4 mr-1"/>Share On Linkedin </a></DropdownMenu.Item>
        <DropdownMenu.Item><a href="#"  class="flex"><Facebook  class="w-4 h-4 mr-1"/>Share On Facebook</a></DropdownMenu.Item>

      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
