<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';

	const links = [
		{ href: '/settings/account', text: 'Account' },
		{ href: '/settings/profile', text: 'Profile' },
		{ href: '/settings/subscription', text: 'Subscription' }
	];
</script>

<div class="mx-auto max-w-6xl px-8">
	<h2 class="mb-4 mt-4 text-2xl">Settings</h2>
	<hr class="mb-4" />
	<Navigation {links} />
	<slot />
</div>
