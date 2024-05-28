<script lang="ts">
	export let links: { href: string; text: string }[];
</script>

<nav class="mb-4 relative flex flex-wrap">
	{#each links as { href, text }}
		<a class="relative px-4 py-3 group" {href}>
			<span class="tracking-wider group-hover:text-gray-500">
				{text}
			</span>
			<hr
				class="absolute bottom-2 left-1/2 w-0 border-gray-600 transition-all group-hover:left-[20%] group-hover:w-[60%]"
			/>
		</a>
	{/each}
</nav>
