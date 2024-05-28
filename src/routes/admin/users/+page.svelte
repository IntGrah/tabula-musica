<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { users, usersTotal, ms, page, size } = data;
</script>

<div class="mx-auto max-w-6xl">
	<h2 class="mb-4 text-3xl">Users</h2>
	<p class="mb-4">
		Search returned {users.length} records ({ms / 1000} seconds).
	</p>
	{#if users.length}
		<p class="mb-4">
			Showing rows {size * page + 1} to {Math.min(size * (page + 1), usersTotal)} of {usersTotal}.
		</p>
	{/if}
	<div class="mb-4 overflow-x-scroll">
		<table class="w-full border-collapse font-mono">
			<tr class="h-10 bg-gray-300">
				<th class="text-left px-4">Email</th>
				<th class="text-left px-4">Name</th>
				<th class="text-left px-4">Role</th>
				<th class="text-left px-4">Created at</th>
			</tr>
			{#each data.users as { name, email, role, createdAt }}
				<tr class="h-10 even:bg-gray-200 odd:bg-gray-300">
					<td class="min-w-64 px-4">{email}</td>
					<td class="min-w-48 px-4">{name}</td>
					<td class="min-w-36 px-4 capitalize">{role}</td>
					<td class="min-w-60 px-4">{createdAt.toLocaleString()}</td>
				</tr>
			{/each}
		</table>
	</div>
</div>
