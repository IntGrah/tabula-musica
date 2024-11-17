<script lang="ts">
    import Hamburger from '$lib/components/header/mod/mobile/Hamburger.svelte';
    import MobileMenu from '$lib/components/header/mod/mobile/Menu.svelte';
    import Logo from '$lib/components/header/mod/Logo.svelte';
    import Search from '$lib/components/header/mod/Search.svelte';
    import NavBar from '$lib/components/header/mod/NavBar.svelte';
    import Profile from '$lib/components/header/mod/Profile.svelte';

    let open = false;
</script>

<header class="sticky z-10 top-0 w-full h-12 px-4 bg-amber-100 shadow-md">
    <div class="util-restrict flex gap-4">
        <Hamburger bind:open />
        <MobileMenu bind:open />
        <Logo />
        <Search />
        <NavBar />
        <Profile />
    </div>
</header>
