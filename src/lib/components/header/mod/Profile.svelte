<script lang="ts">
    import { page } from "$app/state";

    const user = page.data.user;
</script>

<div class="py-1">
    {#if user}
        <a
            class="inline-flex h-8 my-1 px-4 min-w-fit items-center rounded-full transition-colors bg-black/10 hover:bg-violet-900 text-violet-900 hover:text-white"
            href="/profile"
            draggable="false"
        >
            {user?.name}
        </a>
    {:else}
        <form action="/auth/google">
            <button
                class="inline-flex h-8 my-1 px-4 min-w-fit items-center rounded-full transition-colors bg-black/10 hover:bg-violet-900 text-violet-900 hover:text-white"
            >
                Sign in
            </button>
        </form>
    {/if}
</div>
