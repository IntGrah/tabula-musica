<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types';
	import ChangeEmail from '$lib/components/modal/mod/ChangeEmail.svelte';
	import ChangeName from '$lib/components/modal/mod/ChangeName.svelte';
	import DeleteAccount from '$lib/components/modal/mod/DeleteAccount.svelte';
	import ChangePassword from '$lib/components/modal/mod/ChangePassword.svelte';

	const user = $page.data.session!.user;
	export let form: ActionData;

	let nameModal: HTMLDialogElement;
	let emailModal: HTMLDialogElement;
	let passwordModal: HTMLDialogElement;
	let deleteAccountModal: HTMLDialogElement;
</script>

<h3>Account settings</h3>
<div class="max-w-3xl">
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h5>Name</h5>
			<p>{user.name}</p>
		</hgroup>
		<div class="grow">
			<button class="float-right btn" on:click={() => nameModal.showModal()}>
				Change
			</button>
		</div>
	</section>
	<section>
		<hgroup>
			<h5>Email address</h5>
			<p>{user.email}</p>
		</hgroup>
		<div class="grow">
			<button class="float-right btn" on:click={() => emailModal.showModal()}>
				Change
			</button>
		</div>
	</section>
	<section>
		<hgroup>
			<h5>Password</h5>
			<p>Password must be at least 8 characters long</p>
		</hgroup>
		<div class="grow">
			<button class="float-right btn" on:click={() => passwordModal.showModal()}>
				Change
			</button>
		</div>
	</section>
	<section>
		<hgroup>
			<h5>Connected to Google</h5>
			<p>Account linked to Google</p>
		</hgroup>
		<div class="grow">
			<button class="float-right btn" on:click={() => console.log('not implemented')}>
				Disconnect
			</button>
		</div>
	</section>
	<hr class="mb-8" />
	<section>
		<hgroup>
			<h5>Delete Account</h5>
			<p>Permanently delete this account, along with all its associated data</p>
		</hgroup>
		<div class="grow">
			<button class="float-right btn" on:click={() => deleteAccountModal.showModal()}>
				Delete
			</button>
		</div>
	</section>
</div>

<ChangeName bind:nameModal errors={form?.type === 'updatename' ? form?.errors : []} />

<ChangeEmail bind:emailModal errors={form?.type === 'updateemail' ? form?.errors : []} />

<ChangePassword bind:passwordModal errors={form?.type === 'updatepassword' ? form?.errors : []} />

<DeleteAccount
	bind:deleteAccountModal
	errors={form?.type === 'deleteaccount' ? form?.errors : []}
/>

<style lang="postcss">
	section {
		@apply mb-8 flex gap-4 flex-wrap;
	}

	p {
		@apply text-gray-500;
	}
</style>
