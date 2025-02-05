<script>
    import { page } from "$app/state";

    const { status, error } = page;
</script>

<section class="text-center">
    <h1 class="py-12 text-9xl tracking-wide text-cyan-900">{status}</h1>
    <h2 class="mb-12 italic text-cyan-700">
        {error?.message}
    </h2>
</section>
