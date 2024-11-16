<script lang="ts">
	import NavLinks from '$lib/components/NavLinks.svelte';

	const links = [
		{ href: '/settings/account', text: 'Account' },
		{ href: '/settings/profile', text: 'Profile' },
		{ href: '/settings/subscription', text: 'Subscription' }
	];
</script>

<div class="util-restrict px-8">
	<h2 class="mt-4">Settings</h2>
	<hr />
	<NavLinks {links} />
	<slot />
</div>
