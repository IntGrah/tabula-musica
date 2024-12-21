<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    const { articles, articlesTotal, ms, page, size } = data;
    const lo = size * page + 1;
    const hi = Math.min(size * (page + 1), articlesTotal);
</script>

<h4>Articles</h4>
<p>Search returned {articles.length} records ({ms / 1000} seconds).</p>
{#if articles.length}
    <p>Showing rows {lo} to {hi} of {articlesTotal}.</p>
{/if}
<div class="mb-4 overflow-x-scroll">
    <table class="w-full border-collapse font-mono text-xs">
        <tr class="h-10 bg-gray-300">
            <th class="text-left px-4">URL</th>
            <th class="text-left px-4">Title</th>
            <th class="text-left px-4">Author</th>
            <th class="text-left px-4">Published</th>
        </tr>
        {#each data.articles as { slug, title, user, createdAt }}
            <tr class="h-10 even:bg-gray-200 odd:bg-gray-300">
                <td class="min-w-48 px-4"
                    ><a class="text-violet-900 underline" href={`/articles/${slug}`}>{slug}</a></td
                >
                <td class="min-w-64 px-4">{title}</td>
                <td class="min-w-36 px-4">{user?.name}</td>
                <td class="min-w-60 px-4">{createdAt.toLocaleString()}</td>
            </tr>
        {/each}
    </table>
</div>
