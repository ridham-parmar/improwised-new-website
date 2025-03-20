<script lang="ts">
    export let iconName: string;
	import { Users, RefreshCw, BookOpenCheck, MonitorCog, Syringe, WandSparkles, type Icon as IconType } from 'lucide-svelte';

	type MenuItem = {
        name: string,
		icon: typeof IconType;
	};

	const menuItems: MenuItem[] = [
		{
            name: "Users",
			icon: Users
		},
		{
            name: "RefreshCw",
			icon: RefreshCw
		},
		{
            name: "BookOpenCheck",
			icon: BookOpenCheck
		},
		{
            name: "MonitorCog",
			icon: MonitorCog
		},
		{
            name: "Syringe",
			icon: Syringe
		},
		{
            name: "WandSparkles",
			icon: WandSparkles
		}
	];
</script>

{#each menuItems as item}
	{#if item.name === iconName}
        {@const Icon = item.icon}
        <div>
            <Icon size={30}/>
        </div>
    {/if}
{/each}
