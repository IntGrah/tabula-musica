<script lang="ts">
    import { slide } from 'svelte/transition';
    import Chevron from '$lib/components//Chevron.svelte';

    let issuesOpen = false;
</script>

<nav class="max-md:hidden flex gap-4 md:gap-8">
    <a class="group" href="/about">
        <span class="block link my-3 nav-link">About</span>
    </a>
    <div
        class="relative"
        role="menu"
        tabindex="0"
        on:mouseenter={() => {
            issuesOpen = true;
        }}
        on:mouseleave={() => {
            issuesOpen = false;
        }}
    >
        <button class="group">
            <span class="block my-3 nav-link">
                Issues <Chevron up={issuesOpen} />
            </span>
        </button>
        {#if issuesOpen}
            <menu class="absolute top-12 -left-4 rounded-b-md bg-amber-100/80 shadow-md" transition:slide>
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
    <a class="group" href="/events">
        <span class="block link my-3 nav-link">Events</span>
    </a>
</nav>

<style lang="postcss">
    .nav-link {
        @apply tracking-wider text-cyan-800 hover:text-cyan-600;
    }
</style>
