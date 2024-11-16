<script>
	import LoremCard from './LoremCard.svelte';
</script>

<div class="util-restrict p-8">
	<h2>Articles</h2>
	<div class="flex max-md:flex-col">
		<LoremCard />

		<div class="shrink-0 grow md:w-80 flex md:flex-col">
			<LoremCard />
			<LoremCard />
		</div>
	</div>

	<LoremCard />
</div>
