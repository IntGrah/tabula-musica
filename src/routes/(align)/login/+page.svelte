<script lang="ts">
	// import { signIn } from '@auth/sveltekit/client';
	import { enhance } from '$app/forms';
</script>

<h3>Log in</h3>

<section class="flex max-sm:flex-col gap-4">
	<div class="grow">
		<form method="POST" action="?/signin" use:enhance>
			<input class="input" type="text" name="email" placeholder="Email" required />
			<input class="input" type="password" name="password" placeholder="Password" required />
			<button class="btn mb-4">Log in</button>
		</form>
	</div>

	<div class="grow">
		<h5>University sign in</h5>

		<form action="/auth/google">
			<button class="btn mb-4"> Sign in with Raven </button>
		</form>
	</div>
</section>

<h3>Sign up</h3>
<form method="POST" action="/auth/credentials/signup" use:enhance>
	<input class="input" type="text" name="email" placeholder="Email" required />
	<input class="input" type="password" name="password" placeholder="Password" required />
	<input
		class="input"
		type="password"
		name="confirmPassword"
		placeholder="Confirm password"
		required
	/>
	<input class="input" type="text" name="name" placeholder="Name" required />
	<label class="block">
		<input class="size-4" type="checkbox" name="mailingList" />
		Subscribe to mailing list
	</label>
	<button class="btn mb-4">Sign up</button>
</form>
