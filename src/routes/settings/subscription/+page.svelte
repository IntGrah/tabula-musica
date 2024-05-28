<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { isSubscriber } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user!;

	let addressModal: HTMLDialogElement;
</script>

<h3 class="text-3xl mb-4">Subscription</h3>
<div class="max-w-3xl">
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h4>Paper edition</h4>
			{#if isSubscriber(user.role)}
				<p>You are currently a subscriber.</p>
			{:else}
				<p>You are not currently subscribed.</p>
			{/if}
		</hgroup>
		<div class="grow">
			<button class="mt-2 float-right settings-button" on:click={void 0}>
				Manage subscription
			</button>
		</div>
	</section>
	<hr class="mb-8" />
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h4>Postal address</h4>
			<address>
				<p>10 Downing Street</p>
				<p>SW1A 2AA</p>
				<p>London</p>
				<p>United Kingdom</p>
			</address>
		</hgroup>
		<div class="grow">
			<button class="mt-2 float-right settings-button" on:click={() => addressModal.showModal()}>
				Edit address
			</button>
		</div>
	</section>
	<hr class="mb-8" />
</div>

<Modal bind:dialog={addressModal}>
	<h3 class="mb-4 text-2xl">Edit shipping address</h3>
	<hr class="mb-4" />
	<form>
		<input class="mb-4 w-full input" placeholder="Address line 1" required />
		<input class="mb-4 w-full input" placeholder="Address line 2" />
		<input class="mb-4 w-full input" placeholder="Town/City" required />
		<input class="mb-4 w-full input" placeholder="Postcode" required />
        <button class="mb-4 settings-button">Save</button>
	</form>
</Modal>

<style lang="postcss">
	hgroup h4 {
		@apply text-lg tracking-wide;
	}

	hgroup p {
		@apply text-gray-500 tracking-wide;
	}
</style>
