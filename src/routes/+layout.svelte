<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	import '../app.css';
	import { fly, fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen font-serif text-gray-700 bg-amber-50 scroll-smooth">
	<Header />
	{#key data.url.split('/')[1]}
		<main
			class="grow"
			in:fly={{ y: -25, duration: 150, delay: 150 }}
			out:fly={{ y: 25, duration: 150 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
