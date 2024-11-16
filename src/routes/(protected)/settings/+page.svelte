<script lang="ts">
	import NavLinks from '$lib/components/NavLinks.svelte';

	const links = [
		{ href: '/settings/account', text: 'Account' },
		{ href: '/settings/profile', text: 'Profile' },
		{ href: '/settings/subscription', text: 'Subscription' }
	];
</script>

<h2>Settings</h2>
<hr />
<NavLinks {links} />
<section>Welcome to settings</section>
