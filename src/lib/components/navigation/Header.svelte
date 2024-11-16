<script lang="ts">
	import Menu from '$lib/components/navigation/Menu.svelte';

	let open = false;
	import { page } from '$app/stores';
	import NavBar from './NavBar.svelte';
	let query = $page.url.searchParams.get('q');
</script>

<header class="sticky z-10 top-0 h-12 px-4 bg-amber-100 shadow-md">
	<div class="util-restrict flex gap-x-4">
		<button class="sm:hidden shrink-0 h-12 py-3" on:click={() => (open = !open)}>
			<img class="size-6" src="/icons/menu.svg" alt="menu" />
		</button>
		<Menu bind:open />
		<a class="max-md:hidden shrink-0 size-12 p-1" href="/">
			<img class="mx-auto size-10" src="/icons/tabula-musica-treble.png" alt="Treble clef" />
		</a>
		<search class="grow h-12">
			<form class="relative h-10 py-1" action="/search">
				<img class="absolute left-2 inset-y-4 size-5" src="/icons/search.svg" alt="" />
				<input
					name="q"
					class="w-full max-w-40 xs:max-w-52 sm:max-w-64 input !pl-9"
					placeholder="Search..."
					autocomplete="off"
					required
					value={query ?? ''}
					on:invalid={(e) => e.preventDefault()}
				/>
			</form>
		</search>
		<NavBar />
	</div>
</header>
