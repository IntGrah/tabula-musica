<script lang="ts">
    import { slide } from "svelte/transition";
    import Chevron from "$lib/components//Chevron.svelte";

    let issuesOpen = $state(false);
</script>

<nav class="max-md:hidden flex gap-4 md:gap-8">
    <a class="py-3 group" href="/about">
        <span class="link nav-link">About</span>
    </a>
    <div
        class="relative"
        role="menu"
        tabindex="0"
        onmouseenter={() => {
            issuesOpen = true;
        }}
        onmouseleave={() => {
            issuesOpen = false;
        }}
    >
        <button class="py-3 group">
            <span class="nav-link">
                Issues <Chevron up={issuesOpen} />
            </span>
        </button>
        {#if issuesOpen}
            <menu
                class="absolute top-12 -left-4 rounded-b-md bg-amber-100/80 shadow-md"
                transition:slide
            >
                <a class="block p-4 group" href="/archive">
                    <span class="link nav-link">Archive</span>
                </a>
                <a class="block p-4 group" href="/bibliography">
                    <span class="link nav-link">Bibliography</span>
                </a>
                <a class="block p-4 group" href="/puzzles">
                    <span class="link nav-link">Puzzles</span>
                </a>
            </menu>
        {/if}
    </div>
    <a class="py-3 group" href="/events">
        <span class="link nav-link">Events</span>
    </a>
</nav>

<style lang="postcss">
    .nav-link {
        @apply tracking-wider text-cyan-800 group-hover:text-cyan-600;
    }
</style>
