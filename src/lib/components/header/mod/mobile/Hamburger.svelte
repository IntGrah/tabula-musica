<script lang="ts">
    interface Props {
        open: boolean;
    }

    let { open = $bindable() }: Props = $props();

    function toggleMenu() {
        open = !open;
    }
</script>

<button onclick={toggleMenu} class="md:hidden shrink-0 h-12 py-3">
    <img class="size-6" src="/menu.svg" alt="menu" />
</button>
