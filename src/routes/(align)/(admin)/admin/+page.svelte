<script lang="ts">
    import { page } from "$app/state";

    const user = page.data.user!;
</script>

<h4>Dashboard</h4>

<h2>Profile</h2>
<hr />

<h3>Hello, {user?.name}!</h3>
<h4>Sign out</h4>
<form class="mb-4" method="POST" action="/auth/signout">
    <button class="btn">Sign out</button>
</form>
<h4>Settings</h4>
<p><a class="btn" href="settings">Settings</a></p>
<!-- {#if user.admin}
    <div class="p-4 border-2 border-gray-300 rounded-2xl bg-gray-500/10">
        <h4>Admin</h4>
        <p>You are an administrator.</p>
        <p>
            <a class="btn" href="/admin">Admin dashboard</a>
        </p>
    </div>
{/if} -->
