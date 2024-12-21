<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        title: Snippet;
        children: Snippet;
    }

    let { title, children }: Props = $props();
</script>

<article>
    {@render title()}

    {@render children()}
</article>
