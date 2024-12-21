<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    const { users, usersTotal, ms, page, size } = data;
    const lo = size * page + 1;
    const hi = Math.min(size * (page + 1), usersTotal);
</script>

<h4>Users</h4>
<p>Search returned {users.length} records ({ms / 1000} seconds).</p>
{#if users.length}
    <p>Showing rows {lo} to {hi} of {usersTotal}.</p>
{/if}
<div class="mb-4 overflow-x-scroll">
    <table class="w-full border-collapse font-mono text-xs">
        <tr class="h-10 bg-gray-300">
            <th class="text-left px-4">Email</th>
            <th class="text-left px-4">Name</th>
            <th class="text-left px-4">Editor</th>
            <th class="text-left px-4">Admin</th>
            <th class="text-left px-4">Created at</th>
        </tr>
        {#each data.users as { name, editor, admin, createdAt }}
            <tr class="h-10 even:bg-gray-200 odd:bg-gray-300">
                <td class="min-w-64 max-w-64 px-4 overflow-hidden text-ellipsis">{"foo"}</td>
                <td class="min-w-48 max-w-48 px-4 overflow-hidden text-ellipsis">{name}</td>
                <td class="min-w-20 px-4 capitalize">{editor}</td>
                <td class="min-w-20 px-4 capitalize">{admin}</td>
                <td class="min-w-48 px-4">{createdAt.toLocaleString()}</td>
            </tr>
        {/each}
    </table>
</div>
