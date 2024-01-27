<script lang="ts">
	import '../app.pcss';
	import type { LayoutData } from './$types';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	export let data: LayoutData;

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}

	interface Entry {
		// ... other properties
		category: string;
	}

	interface Category {
		name: string;
		slug: string;
	}

	let categories: Category[] = [];

	$: {
		if (data.entries) {
			categories = getCategories(data.entries);
		}
	}

	function getCategories(entries: Entry[]): Category[] {
		const uniqueCategoryNames = new Set<string>();
		entries.forEach((entry) => {
			uniqueCategoryNames.add(entry.category);
		});

		return Array.from(uniqueCategoryNames).map((name) => ({
			name: name,
			slug: toSlug(name)
		}));
	}

	function toSlug(name: string): string {
		return name
			.toLowerCase()
			.replace(/[\s_]+/g, '-')
			.replace(/[^\w-]+/g, '');
	}
</script>

<Drawer class="max-w-50">
	<ul class="p-2">
		{#each categories as category}
			<li class="p-1">
				<a href={`/category/${category.slug}`}>{category.name}</a>
			</li>
		{/each}
	</ul>
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar class="!bg-transparent">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token h-4 w-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">FUNAPIS</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<ul class="p-2">
			{#each categories as category}
				<li class="p-1">
					<a href={`/category/${category.slug}`}>{category.name}</a>
				</li>
			{/each}
		</ul>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="p-5">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>

<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
