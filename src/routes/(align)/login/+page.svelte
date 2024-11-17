<script lang="ts">
    import type { ActionData } from './$types';
    import { signIn } from '@auth/sveltekit/client';
    import { enhance } from '$app/forms';
    import { fade } from 'svelte/transition';

    export let form: ActionData;
</script>

<h3>Log in</h3>

<section class="flex max-sm:flex-col gap-4">
    <div class="grow">
        <form method="POST" use:enhance>
            {#if form?.type === 'login'}
                {#if form?.incomplete}
                    <p class="text-red-500" transition:fade>Please fill in all fields!</p>
                {:else if form?.invalid}
                    <p class="text-red-500" transition:fade>Invalid credentials!</p>
                {/if}
            {/if}

            <input class="input" type="email" name="email" placeholder="Email" required />
            <input class="input" type="password" name="password" placeholder="Password" required />
            <button class="btn mb-4">Log in</button>
        </form>
    </div>

    <div class="grow">
        <h5>University sign in</h5>
        <button class="btn mb-4" on:click={() => signIn('google', { callbackUrl: '/profile' })}>
            Sign in with Raven
        </button>
    </div>
</section>

<h3>Sign up</h3>
<form method="POST" use:enhance>
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
