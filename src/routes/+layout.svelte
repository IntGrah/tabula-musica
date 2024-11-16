<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen font-serif text-gray-700 bg-amber-50 scroll-smooth">
	<Header />
	<main class="grow">
		<slot />
	</main>
	<Footer />
</div>
