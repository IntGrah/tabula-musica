<script lang="ts">
	import NavLinks from '$lib/components/NavLinks.svelte';

	const links = [
		{ href: '/admin', text: 'Dashboard' },
		{ href: '/admin/users', text: 'Users' },
		{ href: '/admin/posts', text: 'Posts' }
	];
</script>

<h2>Admin</h2>
<NavLinks {links} />
<hr />
<slot />
