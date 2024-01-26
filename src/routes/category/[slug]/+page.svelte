<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';

    export let data: PageData;

    interface Entry {
        title: string
        description: string
        category: string
        link: string
    }

    let entries: Entry[] = data.entries;
    let filteredEntries: Entry[] = [];

    // Reactive statement to watch for changes in the slug
    $: slug = $page.params.slug;
    $: filteredEntries = entries.filter(entry => toSlug(entry.category) === slug);

    function toSlug(name: string): string {
        return name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, '');
    }

    // ... other script code ...
</script>

<ul>
    {#each filteredEntries as entry}
        <li>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
            <!-- Add other entry details you want to display -->
        </li>
    {/each}
</ul>