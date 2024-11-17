<script lang="ts">
    export let links: { href: string; text: string }[];
</script>

<nav class="mb-4 flex flex-wrap gap-8">
    {#each links as { href, text }}
        <a class="link tracking-wider hover:text-gray-500" {href}>
            {text}
        </a>
    {/each}
</nav>
