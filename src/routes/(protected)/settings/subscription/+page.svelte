<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import ChangeAddress from '$lib/components/modal/mod/ChangeAddress.svelte';
	import { isSubscriber } from '$lib/util';

	const user = $page.data.session!.user;
	export let form: ActionData;

	let addressModal: HTMLDialogElement;
</script>

<h3>Subscription</h3>
<div class="max-w-3xl">
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h5>Paper edition</h5>
			{#if isSubscriber(user.role)}
				<p class="text-gray-500">You are currently a subscriber.</p>
			{:else}
				<p class="text-gray-500">You are not currently subscribed.</p>
			{/if}
		</hgroup>
		<div class="grow">
			<button class="mt-2 float-right btn"> Manage subscription </button>
		</div>
	</section>
	<hr class="mb-8" />
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h5>Postal address</h5>
			<address class="text-gray-500">
				10 Downing Street<br />
				SW1A 2AA<br />
				London<br />
				United Kingdom
			</address>
		</hgroup>
		<div class="grow">
			<button class="mt-2 float-right btn" on:click={() => addressModal.showModal()}>
				Edit address
			</button>
		</div>
	</section>
</div>

<ChangeAddress bind:addressModal errors={form?.type === 'updateaddress' ? form?.errors : []} />
