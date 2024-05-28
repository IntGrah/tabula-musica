<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user!;

	let bio = user.bio ?? '';
	let nameModal: HTMLDialogElement;
</script>

<h3 class="text-3xl mb-4">Profile</h3>
<div class="max-w-3xl">
	<section class="mb-8 flex flex-wrap">
		<hgroup>
			<h4>Name</h4>
			<p>{user.name}</p>
		</hgroup>
		<div class="grow py-2">
			<button class="float-right settings-button" on:click={() => nameModal.showModal()}
				>Change</button
			>
		</div>
	</section>
	<section class="mb-8">
		<hgroup class="mb-2">
			<h4>About</h4>
			<p>A short introduction shown on your profile</p>
		</hgroup>
		<form method="POST" action="?/updatebio">
			<textarea
				class="py-2 mb-2 w-full min-h-24 max-h-80 input rounded"
                name="bio"
				placeholder="Write about yourself..."
				maxlength="240"
				bind:value={bio}
			/>
			<p class="mb-2 text-sm text-gray-400">{240 - bio.length} Characters left</p>
			<button class="settings-button">Save</button>
		</form>
	</section>
	{#if 2 + 2 === 5}
		<section class="mb-8">
			<hgroup class="mb-4">
				<h4>Avatar</h4>
				<p>Images must be under 2MB</p>
			</hgroup>
			<label class="p-2 border border-black rounded-full cursor-pointer" for="avatar-input">
				Choose an image
				<input id="avatar-input" class="hidden" type="file" />
			</label>
		</section>
	{/if}
	<hr class="mb-8" />
</div>

<Modal bind:dialog={nameModal}>
	<h3 class="mb-4 text-2xl">Change your name</h3>
	<hr class="mb-4" />
	<form method="POST" action="?/updatename">
		<input
			class="mb-4 w-full input"
			type="text"
			name="name"
			placeholder="Name"
            autocomplete="off"
			value={user.name}
		/>
		<div>
			<button class="mb-4 settings-button">Save</button>
		</div>
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
