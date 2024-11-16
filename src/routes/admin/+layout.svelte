<script>
	import NavLinks from '$lib/components/NavLinks.svelte';

	const links = [
		{ href: '/admin', text: 'Dashboard' },
		{ href: '/admin/users', text: 'Users' },
		{ href: '/admin/posts', text: 'Posts' }
	];
</script>

<div class="util-restrict px-8">
	<h3 class="mt-4">Admin</h3>
	<NavLinks {links} />
	<hr />
	<slot />
</div>
