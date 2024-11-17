<script lang="ts">
	import { fade } from 'svelte/transition';

	export let data;
</script>

<div class="util-restrict p-8">
	{#key data.url}
		<div in:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</div>
