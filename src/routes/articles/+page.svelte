<script>
	import LoremCard from './LoremCard.svelte';
</script>

<div class="mx-auto max-w-6xl p-4">
	<h1 class="mb-4 text-4xl">Articles</h1>
	<div class="flex max-md:flex-col">
		<LoremCard />

		<div class="shrink-0 grow md:w-80 flex md:flex-col">
			<LoremCard />
			<LoremCard />
		</div>
	</div>

	<LoremCard />
</div>
