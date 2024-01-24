<script lang="ts">
	import type { PageData } from './$types';
	import drawer from '../lib/assets/drawer.svg';
	import { e } from 'vitest/dist/reporters-rzC174PQ.js';

	export let data: PageData;

	interface Entry {
		title: string;
		description: string;
		auth: string | null;
		https: boolean;
		cors: string;
		link: string;
		category: string;
	}
	type GroupedEntries = Record<string, Entry[]>;
	$: groupedEntries = data.entries.reduce((acc: GroupedEntries, entry: Entry) => {
		const category = entry.category;
		if (!acc[category]) {
			acc[category] = [];
		}
		acc[category].push(entry);
		return acc;
	}, {} as GroupedEntries);
</script>



<!-- Modal toggle -->
<button data-modal-target="default-modal" data-modal-toggle="default-modal" class="" type="button">
	<svg
	class="w-6 h-6 text-gray-800 dark:text-white"
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	viewBox="0 0 24 24"
>
	<path
		fill-rule="evenodd"
		d="M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9h-4Z"
		clip-rule="evenodd"
	/>
</svg>
  </button>
  
  <!-- Main modal -->
  <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
	  <div class="relative p-4 w-full max-w-2xl max-h-full">
		  <!-- Modal content -->
		  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<!-- {#each Object.entries(groupedEntries) as [category]}
			<ul>
				<li>{category}</li>
			</ul>
			{/each} -->
		  </div>
	  </div>
  </div>
  

