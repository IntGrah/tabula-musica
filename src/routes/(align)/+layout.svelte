<script lang="ts">
	import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
</script>

<div class="util-restrict p-8">
    {#key $page.data.url}
        <div in:fade={{ duration: 300 }}>
            <slot />
        </div>
    {/key}
</div>
