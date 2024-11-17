<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import type { ZodIssue } from 'zod';

	export let passwordModal: HTMLDialogElement;
	export let errors: ZodIssue[] | undefined;

	let old_password: string;
	let new_password: string;
	let confirm_password: string;
</script>

<Modal bind:dialog={passwordModal}>
	<h5>Change password</h5>
	<hr />
	<form method="POST" action="?/updatepassword" use:enhance on:submit={() => passwordModal.close()}>
		<input
			class="w-full input"
			type="password"
			name="old_password"
			placeholder="Current password"
			bind:value={old_password}
		/>
		<hr />
		<p class="text-gray-500">New password must</p>
		<ul class="text-gray-500">
			<li>Be at least 8 characters long</li>
			<li>Contain at least one uppercase letter</li>
			<li>Contain at least one lowercase letter</li>
			<li>Contain at least one number</li>
		</ul>
		<input
			class="w-full input"
			type="password"
			name="new_password"
			placeholder="New password"
			bind:value={new_password}
		/>
		<input
			class="w-full input"
			type="password"
			name="confirm_password"
			placeholder="Confirm new password"
			bind:value={confirm_password}
		/>
		{#if new_password !== confirm_password && confirm_password}
			<p class="text-red-600" transition:slide>Passwords do not match</p>
		{/if}
		<button class="mb-4 btn" disabled={!old_password || new_password !== confirm_password}>
			Confirm
		</button>
	</form>
</Modal>
