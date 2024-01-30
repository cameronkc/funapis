<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;

	interface Entry {
		title: string;
		description: string;
		category: string;
		link: string;
		https: boolean;
		auth: string | null;
		cors: string;
	}

	let entries: Entry[] = data.entries;
	let filteredEntries: Entry[] = [];
	let currentCategoryTitle: string = '';

	// Reactive statement to watch for changes in the slug
	$: slug = $page.params.slug;
	$: {
		filteredEntries = entries.filter((entry) => toSlug(entry.category) === slug);
		updateCurrentCategoryTitle();
	}

	function toSlug(name: string): string {
		return name
			.toLowerCase()
			.replace(/[\s_]+/g, '-')
			.replace(/[^\w-]+/g, '');
	}

	function updateCurrentCategoryTitle() {
		const matchingEntry = entries.find((entry) => toSlug(entry.category) === slug);
		currentCategoryTitle = matchingEntry ? matchingEntry.category : 'Category Not Found';
	}

	// ... other script code ...
</script>

	<h1 class="h1 p-4">
		<strong>
			<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">{ currentCategoryTitle }</span>
		</strong>
	</h1>
	
	<div class="text-center mt-20">
		<ul class="grid text-center gap-4 text-center md:grid-cols-2 lg:grid-cols-3">
			{#each filteredEntries as entry}
			<a href={entry.link} target="_blank" class="card card-hover inline-block">
				<li class="flex flex-col h-max">
					<header class="card-header h-fit text-lg">
						<strong><h1>{entry.title}</h1></strong>
					</header>
					<main class="h-fit text-wrap pt-4 text-slate-500 h-20">
						<p>{entry.description}</p>
					</main>
					<footer class="card-footer flex justify-between p-4 ">
						
							{#if entry.https}
								<h3>https</h3>
							{:else}
								<h3 class="text-[#3de878]">https</h3>
							{/if}
							{#if entry.auth === ''}
								<h3>API KEY</h3>
							{:else}
								<h3 class="text-[#3de878]">API KEY</h3>
							{/if}
							{#if entry.cors.toLowerCase() === 'yes'}
								<h3 class="text-[#3de878]">cors</h3>
							{:else}
								<h3>cors</h3>
							{/if}
					
					</footer>
				</li>
			</a>
			{/each}
		</ul>
	</div>

	

