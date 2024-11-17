<script lang="ts">
	import { slide } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import Chevron from '$lib/components/Chevron.svelte';

	export let open: boolean;
	let issuesOpen = false;

	function closeMenu() {
		open = false;
		issuesOpen = false;
	}

	function toggleIssues() {
		issuesOpen = !issuesOpen;
	}

	$: if ($navigating) closeMenu();
</script>

{#if open}
	<menu class="fixed top-12 left-0 w-screen bg-amber-100 shadow-xl" transition:slide>
		<a class="block p-4 group" on:click={closeMenu} href="/">
			<span class="link nav-link">Home</span>
		</a>
		<a class="block p-4 group" on:click={closeMenu} href="/about">
			<span class="link nav-link">About</span>
		</a>
		<button class="block p-4 group" on:click={toggleIssues}>
			<span class="nav-link">
				Issues <Chevron up={issuesOpen} />
			</span>
		</button>
		{#if issuesOpen}
			<menu class="ml-8" transition:slide>
				<a class="nav-link" href="/archive">
					<a class="block p-2 group" href="/archive">
						<span class="link nav-link">Archive</span>
					</a>
					<a class="block p-2 group" href="/bibliography">
						<span class="link nav-link">Bibliography</span>
					</a>
					<a class="block p-2 group" href="/puzzles">
						<span class="link nav-link">Puzzles</span>
					</a>
				</a>
			</menu>
		{/if}
		<a class="block p-4 group" on:click={closeMenu} href="/events">
			<span class="link nav-link">Events</span>
		</a>
	</menu>
{/if}

<style lang="postcss">
	.nav-link {
		@apply text-xl tracking-wider text-cyan-800 hover:text-cyan-600;
	}
	.item {
		@apply block p-4 tracking-wider text-cyan-800;
	}
</style>
