<script lang="ts">
	import '../app.css';
</script>

<body class="dark h-screen">
	<nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Flowbite</span
				>
			</a>
				<slot />
		</div>
	</nav>
</body>
