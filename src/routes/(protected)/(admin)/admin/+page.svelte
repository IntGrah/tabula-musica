<script lang="ts">
    import { page } from "$app/stores";

    const user = $page.data.user!;
</script>

<h4>Dashboard</h4>

<p>
    Hello, {user.name}!
</p>
