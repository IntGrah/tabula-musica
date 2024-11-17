<script>
	import Contact from '$lib/components/footer/grid/Contact.svelte';
	import Social from '$lib/components/footer/grid/Social.svelte';
	import Legal from '$lib/components/footer/Legal.svelte';
</script>

<footer class="bg-gray-900">
	<div class="util-restrict px-6">
		<div class="grid sm:grid-cols-2 py-6 gap-8">
			<Contact />
			<Social />
		</div>
		<hr class="border-neutral-600" />
		<Legal />
	</div>
</footer>
