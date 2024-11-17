<script>
    import { page } from '$app/stores';

    let query = $page.url.searchParams.get('q');
</script>

<search class="grow h-12">
    <form class="relative h-10 py-1" action="/search">
        <img
            class="absolute left-2 inset-y-4 size-5"
            src="/search.svg"
            alt="Search"
            draggable="false"
        />
        <input name="q" class="input" placeholder="Search…" autocomplete="off" value={query} required />
    </form>
</search>

<style lang="postcss">
    input {
        @apply w-full max-w-36 xs:max-w-44 sm:max-w-64
        text-lg    tracking-wide
        pl-9 rounded-full;
    }
</style>
