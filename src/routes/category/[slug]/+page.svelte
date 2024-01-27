<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;

	interface Entry {
		title: string;
		description: string;
		category: string;
		link: string;
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

<h1>{currentCategoryTitle}</h1>

<ul class="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3">
	{#each filteredEntries as entry}
		<a href={entry.link} target="_blank" class="card m-2 inline-block">
			<li>
				<header class="card-header text-lg">
					<h1>{entry.title}</h1>
				</header>
				<section class="text-wrap p-4">
					<p>{entry.description}</p>
				</section>
				<footer class="card-footer">(footer)</footer>
			</li>
		</a>
	{/each}
</ul>
