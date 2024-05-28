<script>
	import Navigation from '$lib/components/Navigation.svelte';

	const links = [
		{ href: '/admin', text: 'Dashboard' },
		{ href: '/admin/users', text: 'Users' },
		{ href: '/admin/posts', text: 'Posts' }
	];
</script>

<div class="mx-auto max-w-6xl px-8">
	<h2 class="mb-4 mt-4 text-2xl">Admin</h2>
	<Navigation {links} />
	<hr class="mb-4" />
	<slot />
</div>
