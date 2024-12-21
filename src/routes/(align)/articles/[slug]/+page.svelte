<script lang="ts">
    let { data } = $props();
    const { html } = data;
</script>

<article class="mx-auto max-w-3xl p-6">
    <div>{@html html}</div>
</article>
