<script lang="ts">
    import { page } from "$app/stores";
    import NavLinks from "$lib/components/NavLinks.svelte";
    import type { Snippet } from "svelte";
    import { fly } from "svelte/transition";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    const links = [
        { href: "/settings/account", text: "Account" },
        { href: "/settings/subscription", text: "Subscription" },
    ];
</script>

<h2>Settings</h2>
<hr />
<NavLinks {links} />
{#key $page.data.url}
    <div in:fly={{ x: -30, duration: 150, delay: 150 }} out:fly={{ x: 30, duration: 150 }}>
        {@render children()}
    </div>
{/key}
