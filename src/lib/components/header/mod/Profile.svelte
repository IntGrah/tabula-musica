<script lang="ts">
    import { signIn } from '@auth/sveltekit/client';
    import { page } from '$app/stores';

    const user = $page.data.session?.user;
</script>

<div class="py-1">
    {#if user}
        <a
            class="inline-flex h-8 my-1 px-4 min-w-fit items-center rounded-full transition-colors bg-black/10 hover:bg-violet-900 text-violet-900 hover:text-white"
            href="/profile"
            draggable="false"
        >
            <span class="max-xs:hidden">{user.name}</span>
            <img class="xs:hidden" src="/account.svg" alt="Account" draggable="false" />
        </a>
    {:else}
        <button
            class="inline-flex h-8 my-1 px-4 min-w-fit items-center rounded-full transition-colors bg-black/10 hover:bg-violet-900 text-violet-900 hover:text-white"
            on:click={() => signIn('google', { callbackUrl: '/profile' })}>Sign in</button
        >
    {/if}
</div>
