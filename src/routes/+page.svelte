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
	<div class="pb-10">
		<strong>
			<span
				class="lg:text:8xl bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-5xl text-transparent md:text-6xl"
			>
				Funapis, a collection of over 1,500 API's.
			</span>
		</strong>
	</div>
	<div class="input-group input-group-divider m-auto max-w-md grid-cols-[auto_1fr_auto]">
		<input type="search" placeholder="Search..." bind:value={$searchStore.search} />
	</div>
</div>
<section class="w-full">
	<div class="mt-20 text-center">
		<ul class="mt-20 grid gap-4 text-center text-center md:grid-cols-2 lg:grid-cols-3">
			{#each $searchStore.filtered as entry}
				<a
					href={entry.link}
					target="_blank"
					class="card card-hover m-4 inline-block min-w-64 lg:p-4"
				>
					<li class="relative flex flex-col">
						<header class="card-header text-lg">
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
</section>
