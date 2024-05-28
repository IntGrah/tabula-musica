<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';
	import { isSubscriber } from '$lib/util';

	export let data: LayoutData;
	const user = data.user;
	let open = false;
	import { page } from '$app/stores';
	let query = $page.url.searchParams.get('q');
</script>

<svelte:head>
	<title>Tabula Musica</title>
	<meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen font-serif text-gray-700 bg-amber-50 scroll-smooth">
	<header class="sticky z-10 top-0 h-12 px-4 bg-amber-100 shadow-md">
		<div class="mx-auto max-w-6xl flex gap-x-4">
			<button class="sm:hidden shrink-0 h-12 py-3" on:click={() => (open = !open)}>
				<img class="size-6" src="/icons/menu.svg" alt="menu" />
			</button>
			<Menu bind:open />
			<a class="max-md:hidden shrink-0 size-12 p-1" href="/">
				<img class="mx-auto size-10" src="https://placehold.co/40" alt="Treble clef" />
			</a>
			<search class="grow h-12">
				<form class="relative h-10 py-1" action="/search">
					<img class="absolute left-2 inset-y-4 size-5" src="/icons/search.svg" alt="" />
					<input
						name="q"
						class="w-full max-w-40 xs:max-w-52 sm:max-w-64 input !pl-9"
						placeholder="Search articles..."
						autocomplete="off"
						required
						value={query ?? ''}
						on:invalid={(e) => e.preventDefault()}
					/>
				</form>
			</search>
			<nav class="max-sm:hidden flex gap-x-4 md:gap-x-8 text-cyan-800">
				<a class="nav-link" href="/articles">Articles</a>
				<a class="nav-link" href="/events">Events</a>
				<a class="nav-link" href="/about">About</a>
			</nav>
			<nav class="flex gap-x-4 py-1">
				<a class="nav-button" href="/settings/profile">
					{#if user}
						{user.name}
					{:else}
						Log in
					{/if}
				</a>
			</nav>
		</div>
	</header>
	<main class="grow">
		<slot />
	</main>
	<Footer />
</div>
