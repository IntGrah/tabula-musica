<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import type { ZodIssue } from 'zod';

	export let nameModal: HTMLDialogElement;
	export let errors: ZodIssue[] | undefined;

	let name: string;
</script>

<Modal bind:dialog={nameModal}>
	<h5>Change name</h5>
	<hr />
	<form method="POST" action="?/updatename" use:enhance>
		<input
			class="w-full input"
			type="text"
			name="name"
			placeholder="Name"
			autocomplete="off"
			bind:value={name}
		/>
		{#each errors ?? [] as error}
			<p class="text-red-600" transition:slide>{error.message}</p>
		{/each}
		<div>
			<button class="mb-4 btn">Save</button>
		</div>
	</form>
</Modal>
