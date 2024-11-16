<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';

	const user = $page.data.session?.user;
</script>

<section>
	<div>Hello, {user?.name}!</div>
	<div>
		Logged in as {user?.email}
	</div>
	<div>
		<button on:click={() => signOut()}>Sign out</button>
	</div>
	<div>
		{#if true}
			<a href="/admin">Go to admin page</a>
		{/if}
	</div>
	<div>
		<h3 class="">Settings</h3>
		<a href="settings">Go</a>
	</div>
</section>
