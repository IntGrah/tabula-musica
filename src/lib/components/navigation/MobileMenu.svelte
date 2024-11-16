<script lang="ts">
	import { slide } from 'svelte/transition';
	import { links } from './links';
	import { navigating } from '$app/stores';

	export let open: boolean;

	$: if ($navigating) open = false;
</script>

{#if open}
	<div class="fixed top-12 left-0 w-screen bg-amber-100 shadow-xl" transition:slide>
		{#each links as { name, href }}
			<a class="nav-link" {href} on:click={() => (open = false)}>
				<p class="p-4 text-xl text-cyan-800">
					{name}
				</p>
			</a>
		{/each}
	</div>
{/if}
