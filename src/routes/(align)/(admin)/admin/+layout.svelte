<script lang="ts">
    import { page } from "$app/state";
    import NavLinks from "$lib/components/NavLinks.svelte";
    import { fly } from "svelte/transition";

    let { children } = $props();

    const links = [
        { href: "/admin", text: "Dashboard" },
        { href: "/admin/users", text: "Users" },
        { href: "/admin/articles", text: "Articles" },
    ];
</script>

<h2>Admin</h2>
<NavLinks {links} />
<hr />
{#key page.url.pathname}
    <div in:fly={{ x: -30, duration: 150, delay: 150 }} out:fly={{ x: 30, duration: 150 }}>
        {@render children()}
    </div>
{/key}
