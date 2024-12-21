<script lang="ts">
    import { page } from "$app/stores";
    import type { Snippet } from "svelte";
    import { fade } from "svelte/transition";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="util-restrict p-8">
    {#key $page.data.url}
        <div in:fade={{ duration: 300 }}>
            {@render children()}
        </div>
    {/key}
</div>
