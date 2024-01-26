<script lang="ts">
    import '../app.pcss';
    import type { LayoutData } from './$types';
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';

    export let data: LayoutData;

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

        return Array.from(uniqueCategoryNames).map(name => ({
            name: name,
            slug: toSlug(name)
        }));
    }

    function toSlug(name: string): string {
        return name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, '');
    }
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			Funapis
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<ul class='p-2'>
			{#each categories as category}
			<li class='p-1'>
				<a href={`/category/${category.slug}`}>{ category.name }</a>
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