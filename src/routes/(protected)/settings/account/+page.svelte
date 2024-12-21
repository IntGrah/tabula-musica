<script lang="ts">
    import { page } from "$app/stores";

    interface Props {
        data: any;
    }

    let { data }: Props = $props();
    const { raven } = data;
    const user = $page.data.user!;
</script>

<h3>Account settings</h3>
<div class="max-w-3xl">
    <section class="mb-8 flex flex-wrap">
        <hgroup>
            <h5>Name</h5>
            <p>{user.name}</p>
        </hgroup>
        <div class="grow">
            <button class="float-right btn">Change</button>
        </div>
    </section>

    {#if raven}
        <section>
            <hgroup>
                <h5>Connected to Google</h5>
                <p>Account linked to Google: {raven.email}</p>
            </hgroup>
            <div class="grow">
                <button class="float-right btn" onclick={() => console.log("not implemented")}>
                    Disconnect
                </button>
            </div>
        </section>
    {/if}

    <hr class="mb-8" />
    <section>
        <hgroup>
            <h5>Delete Account</h5>
            <p>Permanently delete this account, along with all its associated data</p>
        </hgroup>
        <div class="grow">
            <button class="float-right btn">Delete</button>
        </div>
    </section>
</div>

<style lang="postcss">
    section {
        @apply mb-8 flex gap-4 flex-wrap;
    }

    p {
        @apply text-gray-500;
    }
</style>
