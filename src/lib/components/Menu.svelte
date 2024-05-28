<script>
	import { fly, slide } from 'svelte/transition';

	export let open;

	const links = [
		{ name: 'Articles', href: '/articles' },
		{ name: 'Events', href: '/events' },
		{ name: 'About', href: '/about' }
	];
</script>

{#if open}
	<div class="fixed top-12 left-0 h-screen w-screen p-4 bg-amber-50" transition:slide>
		{#each links as { name, href }, i}
			<p class="mb-4 text-xl text-cyan-800" transition:fly={{ y: -15, delay: 50 * i }}>
				<a class="nav-link" {href} on:click={() => open = false}>{name}</a>
			</p>
		{/each}
		<hr />
	</div>
{/if}
