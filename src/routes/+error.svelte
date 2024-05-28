<script>
	import { page } from '$app/stores';
</script>

<hgroup class="text-center font-serif">
	<h1 class="py-12 text-9xl tracking-wide text-cyan-900">{$page.status}</h1>
	<p class="text-2xl italic text-cyan-700">
		{#if $page.status === 404}
			The requested resource was not found on the server.
		{:else}
			{$page.error?.message}
		{/if}
	</p>
</hgroup>
