<script lang="ts">
	import { links } from './links';
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	const user = $page.data.session?.user;
</script>

<nav class="max-sm:hidden flex gap-x-4 md:gap-x-8 text-center tracking-wider text-cyan-800">
	{#each links as { name, href }}
		<a class="nav-link relative py-3 hover:text-cyan-600" {href}>{name}</a>
	{/each}
</nav>
<nav class="flex gap-x-4 py-1">
	{#if user}
		<a
			class="inline-flex h-8 my-1 px-3 min-w-fit items-center rounded-full transition-colors bg-black/10 hover:bg-violet-900 text-violet-900 hover:text-white"
			href="/profile"
		>
			{user.name}
		</a>
	{:else}
		<button
			class="inline-flex h-8 my-1 px-3 min-w-fit items-center rounded-full transition-colors bg-black/10 hover:bg-violet-900 text-violet-900 hover:text-white"
			on:click={() => signIn('google')}>Sign in</button
		>
	{/if}
</nav>

<style lang="postcss">
	.nav-link::after {
		content: '';
		@apply absolute bottom-1 left-1/2 w-0 h-0.5
    bg-cyan-600 transition-all;
	}

	.nav-link:hover::after {
		@apply left-0 w-full;
	}
</style>
