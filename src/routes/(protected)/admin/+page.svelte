<script lang="ts">
	import { page } from '$app/stores';
	import NavLinks from '$lib/components/NavLinks.svelte';

	const user = $page.data.session?.user;

	const links = [
		{ href: '/admin', text: 'Dashboard' },
		{ href: '/admin/users', text: 'Users' },
		{ href: '/admin/posts', text: 'Posts' }
	];
</script>

<h2>Admin</h2>
<NavLinks {links} />
<hr />
<h4>Dashboard</h4>

<p>
	Hello, {user?.name}!
</p>
