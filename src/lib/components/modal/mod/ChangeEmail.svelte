<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import type { ZodIssue } from 'zod';

	export let emailModal: HTMLDialogElement;
	export let errors: ZodIssue[] | undefined;

	let email: string;
</script>

<Modal bind:dialog={emailModal}>
	<h5>Change email address</h5>
	<hr />
	<form method="POST" action="?/updateemail" use:enhance on:submit={() => emailModal.close()}>
		<input
			class="w-full input"
			name="email"
			type="email"
			placeholder="New email"
			bind:value={email}
		/>
		{#each errors ?? [] as error}
			<p class="text-red-600" transition:slide>{error.message}</p>
		{/each}
		<button class="mb-4 btn" disabled={!email}>Save</button>
	</form>
</Modal>
