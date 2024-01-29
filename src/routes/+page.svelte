<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type Product = {
		title: string,
		description: string,
		category: string
	}

	const searchApis = data.entries.map((entry) => ({
		...entry,
		searchTerms: `${entry.title} ${entry.description} ${entry.category}`
	}));

	const searchStore = createSearchStore(searchApis);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section class="w-full text-sm">
	<div class="grid justify-center text-center">
		<div class="md:input-group input-group-divider m-auto hidden max-w-md grid-cols-[auto_1fr_auto]">
			<input type="search" placeholder="Search..." bind:value={$searchStore.search} />
		</div>

			<h1 class="pt-2">
				{'api count: ' + data.entries.length}
			</h1>
	</div>
	<div class="mt-20 text-center">
		<ul class="grid gap-4 text-center text-center md:grid-cols-2 lg:grid-cols-3">
			{#each $searchStore.filtered as entry}
				<a href={entry.link} target="_blank" class="card card-hover inline-block max-w-96">
					<li>
						<header class="card-header text-lg">
							<strong><h1>{entry.title}</h1></strong>
						</header>
						<section class="text-wrap p-4 text-slate-500">
							<p>{entry.description}</p>
						</section>
						<footer class="card-footer">(footer)</footer>
					</li>
				</a>
			{/each}
		</ul>
	</div>
</section>
