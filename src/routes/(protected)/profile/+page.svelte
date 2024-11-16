<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';

	const user = $page.data.session?.user;
</script>

<h2>Profile</h2>
<hr />

<section>
	<p>Hello, {user?.name}!</p>
	<p>
		Logged in as {user?.email}
	</p>
	<h4>Sign out</h4>
	<p><button on:click={() => signOut()}>Sign out</button></p>
	{#if true}
		<h4>Admin</h4>
		<p><a href="/admin">Go to admin page</a></p>
	{/if}
	<h4 class="">Settings</h4>
	<p><a href="settings">Go</a></p>
</section>
