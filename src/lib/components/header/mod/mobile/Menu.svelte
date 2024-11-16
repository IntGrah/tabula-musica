<script lang="ts">
	import { slide } from 'svelte/transition';
	import { navigating } from '$app/stores';

	export let open: boolean;

	function closeMenu() {
		open = false;
	}

	$: if ($navigating) closeMenu();
</script>

{#if open}
	<div class="fixed top-12 left-0 w-screen bg-amber-100 shadow-xl" transition:slide>
		<a on:click={closeMenu} href="/">Home</a>
		<a on:click={closeMenu} href="/about">About</a>
		<a on:click={closeMenu} href="/issues">Issues</a>
		<a on:click={closeMenu} href="/events">Events</a>
	</div>
{/if}

<style lang="postcss">
	a {
		@apply block p-4 text-xl text-cyan-800;
	}
</style>
