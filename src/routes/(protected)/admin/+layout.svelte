<script lang="ts">
	import NavLinks from '$lib/components/NavLinks.svelte';
	import { fly } from 'svelte/transition';

	export let data;

	const links = [
		{ href: '/admin', text: 'Dashboard' },
		{ href: '/admin/users', text: 'Users' },
		{ href: '/admin/posts', text: 'Posts' }
	];
</script>

<h2>Admin</h2>
<NavLinks {links} />
<hr />
{#key data.url}
	<div in:fly={{ x: -30, duration: 150, delay: 150 }} out:fly={{ x: 30, duration: 150 }}>
		<slot />
	</div>
{/key}
