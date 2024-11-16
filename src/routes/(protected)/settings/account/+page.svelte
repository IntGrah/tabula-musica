<script lang="ts">
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';

	const user = $page.data.session?.user;

	let emailModal: HTMLDialogElement;
	let passwordModal: HTMLDialogElement;
	let deleteAccountModal: HTMLDialogElement;
</script>

<h3>Account settings</h3>
<div class="max-w-3xl">
	<section>
		<hgroup class="mr-4">
			<h4>Email address</h4>
			<p>{user?.email}</p>
		</hgroup>
		<div class="grow">
			<button class="mt-2 float-right settings-button" on:click={() => emailModal.showModal()}
				>Change</button
			>
		</div>
	</section>
	{#if true}
		<section>
			<hgroup class="mr-4">
				<h4>Password</h4>
				<p>Password must be at least 8 characters long</p>
			</hgroup>
			<div class="grow">
				<button class="mt-2 float-right settings-button" on:click={() => passwordModal.showModal()}
					>Change</button
				>
			</div>
		</section>
	{/if}
	{#if true}
		<section>
			<hgroup class="mr-4">
				<h4>Connected to Google</h4>
				<p>Account linked to Google</p>
			</hgroup>
			<div class="grow">
				<button class="mt-2 float-right settings-button">Disconnect</button>
			</div>
		</section>
	{/if}
	<hr class="mb-8" />
	<section>
		<hgroup>
			<h4>Delete Account</h4>
			<p>Permanently delete this account, along with all its associated data</p>
		</hgroup>
		<div class="grow">
			<button
				class="mt-2 float-right settings-button"
				on:click={() => deleteAccountModal.showModal()}
			>
				Delete
			</button>
		</div>
	</section>
</div>

<Modal bind:dialog={emailModal}>
	<h5>Change email address</h5>
	<hr />
	<form>
		<input class="mb-4 w-full input" type="password" placeholder="Current password" required />
		<p>A verification code will be sent to this email address.</p>
		<input class="mb-4 w-full input" type="email" placeholder="New email" required />
		<button class="mb-4 settings-button">Send verification code</button>
	</form>
</Modal>

<Modal bind:dialog={passwordModal}>
	<h5>Change password</h5>
	<hr />
	<form>
		<input class="mb-4 w-full input" type="password" placeholder="Current password" required />
		<hr />
		<p>New password must</p>
		<ul>
			<li>Be at least 8 characters long</li>
			<li>Contain at least one uppercase letter</li>
			<li>Contain at least one lowercase letter</li>
			<li>Contain at least one number</li>
		</ul>
		<input class="mb-4 w-full input" type="password" placeholder="New password" required />
		<input class="mb-4 w-full input" type="password" placeholder="Confirm new password" required />
		<button class="mb-4 settings-button">Confirm</button>
	</form>
</Modal>

<Modal bind:dialog={deleteAccountModal}>
	<h5>Delete account</h5>
	<hr />
	<h6 class="text-red-600 font-bold">Warning: this is a destructive action!</h6>
	<p>
		All data associated with this account will be deleted, including any active subscriptions,
		comments, articles, and profile information.
	</p>
	<hr />
	<form>
		<p>To confirm, please type your password.</p>
		<input class="mb-4 w-full input" placeholder="Password" autocomplete="off" required />
		<button class="mb-4 settings-button">Delete account</button>
	</form>
</Modal>

<style lang="postcss">
	section {
		@apply mb-8 flex flex-wrap;
	}

	h4 {
		@apply text-lg tracking-wide;
	}

	p,
	li {
		@apply text-gray-500 tracking-wide;
	}

	li {
		@apply ml-4 list-disc;
	}
</style>
