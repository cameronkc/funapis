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
		<span
			class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
			>{currentCategoryTitle}</span
		>
	</strong>
</h1>

<div class="mt-20 text-center">
	<ul class="grid gap-4 text-center text-center md:grid-cols-2 lg:grid-cols-3">
		{#each filteredEntries as entry}
			<a href={entry.link} target="_blank" class="card card-hover m-4 inline-block min-w-64 lg:p-4">
				<li class="relative flex flex-col">
					<header class="card-header text-align text-wrap max-w-44 m-auto text-lg">
						<strong><h1>{entry.title}</h1></strong>
					</header>
					<main class="h-fit text-wrap p-4 pt-20">
						<p>{entry.description}</p>
					</main>
					<footer
						class="card-footer absolute top-5 w-max justify-center text-sm text-slate-400 lg:top-0"
					>
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
