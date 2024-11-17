<script lang="ts">
    export let open: boolean;

    function toggleMenu() {
        open = !open;
    }
</script>

<button on:click={toggleMenu} class="md:hidden shrink-0 h-12 py-3">
    <img class="size-6" src="/menu.svg" alt="menu" />
</button>
