<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="max-w-4xl p-8">
	<form method="POST" action="?/login" use:enhance>
		{#if form?.type === 'login'}
			{#if form?.incomplete}
				<p class="text-red-500" transition:fade>Please fill in all fields!</p>
			{:else if form?.invalid}
				<p class="text-red-500" transition:fade>Invalid credentials!</p>
			{/if}
		{/if}

		<input class="input" type="email" name="email" placeholder="Email" required />
		<input class="input" type="password" name="password" placeholder="Password" required />
		<button>Log in</button>
	</form>
	<form method="POST" action="?/signup" use:enhance>
		{#if form?.type === 'signup'}
			{#if form?.incomplete}
				<p class="text-red-500" transition:fade>Please fill in all fields!</p>
			{:else if form?.invalid}
				<p class="text-red-500" transition:fade>Invalid credentials!</p>
			{:else if form?.alreadyExists}
				<p class="text-red-500" transition:fade>Email address already in use!</p>
			{:else if form?.invalid}
				<p class="text-red-500" transition:fade>Invalid credentials!</p>
			{/if}
		{/if}

		<input class="input" type="email" name="email" placeholder="Email" required />
		<input
			class="input"
			type="password"
			name="password"
			placeholder="Password"
			value="password"
			required
		/>
		<input
			class="input"
			type="password"
			name="confirmPassword"
			placeholder="Confirm password"
			required
		/>
		<input class="input" type="text" name="name" placeholder="Name" value="Jane Doe" required />
		<p>Would you like to subscribe to our mailing list?</p>
		<input class="block size-6" type="checkbox" name="mailingList" />
		<button>Sign up</button>
	</form>
</div>

<style lang="postcss">
	button {
		@apply h-10 px-4
        bg-black/5 hover:bg-black/20
        rounded-lg tracking-wider;
	}

	input,
	button,
	p {
		@apply mb-4;
	}
</style>
