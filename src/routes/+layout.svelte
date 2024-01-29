<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
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
	function drawerClose(): void {
		console.log('drawer closing:');
		drawerStore.close();
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

<Drawer class="bg-w-48 bg-surface-100-100-token">
	<div class="p-4">
		<strong
			><span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-xl text-transparent"
				>Categories</span
			></strong
		>
		<ul class="p-2">
			{#each categories as category}
				<li class="p-1">
					<a class="text-slate-500" on:click={drawerClose} href={`/category/${category.slug}`}
						>{category.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</Drawer>
<AppShell slotSidebarLeft="w-0 lg:w-48">
	<svelte:fragment slot="header">
		<AppBar class="!bg-transparent !bg-opacity-95">
			<svelte:fragment slot="lead">
				<div class="m-auto flex items-center">
					<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token h-4 w-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/" data-sveltekit-preload-data="hover"
						><strong class="text-xl uppercase">
							<span
								class="bg-gradient-to-br from-red-500 to-yellow-500 box-decoration-clone bg-clip-text text-transparent lg:pl-8"
								>FUNAPIS</span
							>
						</strong></a
					>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button type="button" class="btn variant-filled">
					<strong>sign in</strong>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div class="p-4">
			<strong
				><span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-xl text-transparent"
					>Categories</span
				></strong
			>
			<ul class="p-2">
				{#each categories as category}
					<li class="p-1">
						<a class="text-slate-500 hover:text-slate-400" href={`/category/${category.slug}`}
							>{category.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="default">
		<div class="grid justify-center p-5 on:click={drawerClose}">
			<slot />
		</div>
	</svelte:fragment>

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
