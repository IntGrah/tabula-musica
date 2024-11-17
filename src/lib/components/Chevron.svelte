<script lang="ts">
    export let up: boolean;
</script>

<i class="chevron" class:up></i>

<style>
    .chevron {
        margin-left: 0.5em;
        border: solid currentColor;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 0.2em;
        transition: transform 0.15s;
        transform: translateY(-2px) rotate(45deg);
    }

    .chevron.up {
        transform: rotate(-135deg);
    }
</style>
