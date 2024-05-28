<script lang="ts">
	import { page } from '$app/stores';

	let scroll = 0;
	let root = $page.url.pathname === '/';
	$: solid = !root || scroll > 240;
</script>

<svelte:window on:scroll={() => (scroll = window.scrollY)} />

<header
	class="top-0 w-full z-50 transition-all"
	style:position={root ? 'fixed' : 'sticky'}
>
	<slot />
</header>

{#if solid}
	<style lang="postcss">
		header {
			@apply bg-amber-100/80 backdrop-blur-sm shadow-md;
		}
	</style>
{:else}
	<style lang="postcss">
		header {
			@apply bg-transparent backdrop-blur-none shadow-none;
		}
	</style>
{/if}
