<script lang="ts">
    import { page } from "$app/state";
    import { fade } from "svelte/transition";

    let { children } = $props();
</script>

<div class="util-restrict p-8">
    {#key page.url.pathname}
        <div in:fade={{ duration: 300 }}>
            {@render children()}
        </div>
    {/key}
</div>
