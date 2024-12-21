<script lang="ts">
    interface Props {
        links: { href: string; text: string }[];
    }

    let { links }: Props = $props();
</script>

<nav class="flex flex-wrap gap-8">
    {#each links as { href, text }}
        <a class="py-3 group" {href}>
            <span class="link tracking-wider group-hover:text-gray-500">
                {text}
            </span>
        </a>
    {/each}
</nav>
