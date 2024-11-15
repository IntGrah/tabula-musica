<script lang="ts">
	import { defaultUser } from '../../default_user';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const user = data.user ?? defaultUser;
</script>

<div class="py-16 text-5xl text-center text-cyan-800">
	Hello, {user.name}!
	<br />
	Logged in as {user.email}
	<br />
	<form method="POST" action="?/signout">
		<button>Sign out</button>
	</form>
	{#if user.role === 'admin'}
		<a href="/admin">Go to admin page</a>
	{/if}
</div>
