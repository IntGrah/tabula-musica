<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { User_role } from '@prisma/client';

	const user = $page.data.session!.user;
</script>

<h2>Profile</h2>
<hr />

<section>
	<h3>Hello, {user.name}!</h3>
	<h4>Sign out</h4>
	<p><button class="btn" on:click={() => signOut()}>Sign out</button></p>
	<h4 class="">Settings</h4>
	<p><a class="btn" href="settings">Settings</a></p>
	{#if user.role === User_role.admin}
		<div class="p-4 border-2 border-gray-300 rounded-2xl bg-gray-500/10">
			<h4>Admin</h4>
			<p><a class="btn" href="/admin">Go to admin page</a></p>
		</div>
	{/if}
</section>
