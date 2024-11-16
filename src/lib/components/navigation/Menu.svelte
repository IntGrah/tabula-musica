<script lang="ts">
	import { slide } from 'svelte/transition';
	import { links } from './links';

	export let open: boolean;
</script>

{#if open}
	<div class="fixed top-0 left-0 w-screen bg-amber-50" transition:slide>
		{#each links as { name, href }}
			<a class="nav-link" {href} on:click={() => (open = false)}>
				<p class="p-4 text-xl text-cyan-800">
					{name}
				</p>
			</a>
		{/each}
	</div>
{/if}
