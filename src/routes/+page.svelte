<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type Product = {
		title: string;
		description: string;
		category: string;
		auth: string | null;
		https: boolean;
		cors: string;
	};

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

<div class="grid justify-center text-center">
	<div class="md:input-group input-group-divider m-auto hidden max-w-md grid-cols-[auto_1fr_auto]">
		<input type="search" placeholder="Search..." bind:value={$searchStore.search} />
	</div>

	<h1 class="pt-2 text-2xl">
		{'api count: ' + data.entries.length}
	</h1>
</div>
<section class="w-full text-sm">
	<div class="mt-20 text-center">
		<ul class="grid gap-4 text-center text-center md:grid-cols-2 lg:grid-cols-3">
			{#each $searchStore.filtered as entry}
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
</section>
