<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import { enhance } from '$app/forms';
	import type { ZodIssue } from 'zod';
	import { slide } from 'svelte/transition';

	export let deleteAccountModal: HTMLDialogElement;
	export let errors: ZodIssue[] | undefined;

	const DELETE_CONFIRM = 'DELETE ACCOUNT';
	let confirmation: string;
</script>

<Modal bind:dialog={deleteAccountModal}>
	<h5>Delete account</h5>
	<hr />
	<h6 class="text-red-600">Warning: this is a destructive action!</h6>
	<p class="text-gray-500">
		All data associated with this account will be deleted, including any active subscriptions,
		comments, articles, and profile information.
	</p>
	<hr />
	<form
		method="POST"
		action="?/deleteaccount"
		use:enhance
		on:submit={() => deleteAccountModal.close()}
	>
		<p class="text-gray-500">
			To confirm, please type <span class="select-none text-red-600">{DELETE_CONFIRM}</span>.
		</p>
		<input
			class="w-full input"
			type="text"
			name="confirmation"
			autocomplete="off"
			bind:value={confirmation}
			required
		/>
		{#each errors ?? [] as error}
			<p class="text-red-600" transition:slide>{error.message}</p>
		{/each}>
		<button class="mb-4 btn" disabled={confirmation !== DELETE_CONFIRM}>
			Delete account
		</button>
	</form>
</Modal>
