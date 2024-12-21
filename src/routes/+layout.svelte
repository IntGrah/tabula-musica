<script lang="ts">
    import Header from "$lib/components/header/Header.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
    import type { Snippet } from "svelte";

    import "../app.css";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>Tabula Musica</title>
    <meta name="description" content="Tabula Musica" />
</svelte:head>

<div class="relative flex flex-col min-h-screen font-serif text-gray-700 bg-amber-50 scroll-smooth">
    <Header />
    {#key $page.data.url.split("/")[1]}
        <main class="grow" in:fly={{ y: -25, duration: 150, delay: 150 }}>
            {@render children()}
        </main>
    {/key}
    <Footer />
</div>
