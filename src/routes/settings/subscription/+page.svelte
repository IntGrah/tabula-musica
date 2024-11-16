<script lang="ts">
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';

	const user = $page.data.session?.user;

	let addressModal: HTMLDialogElement;
</script>

<h3>Subscription</h3>
<div class="max-w-3xl">
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h4>Paper edition</h4>
			{#if user}
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
	<h5>Edit shipping address</h5>
	<hr />
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
