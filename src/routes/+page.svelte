<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="w-full text-sm">
	<strong>
		{'api count: ' + data.entries.length}
	</strong>
</section>
