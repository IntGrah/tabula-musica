<script>
	import Contact from '$lib/components/footer/grid/Contact.svelte';
	import Donate from '$lib/components/footer/grid/Donate.svelte';
	import Social from '$lib/components/footer/grid/Social.svelte';
	import Subscribe from '$lib/components/footer/grid/Subscribe.svelte';
	import Legal from '$lib/components/footer/Legal.svelte';
</script>

<footer class="bg-gray-900">
	<div class="util-restrict px-6">
		<div class="grid sm:grid-cols-2 py-6 gap-8">
			<Subscribe />
			<Contact />
			<Social />
			<Donate />
		</div>
		<hr class="border-neutral-600" />
		<Legal />
	</div>
</footer>

<style lang="postcss">
	footer :global(h5) {
		@apply uppercase text-cyan-100;
	}

	footer :global(.button) {
		@apply inline-flex h-10 px-4 items-center
        text-cyan-800
        transition-colors bg-amber-100 hover:bg-amber-100/80
        rounded-full tracking-wider;
	}
</style>
