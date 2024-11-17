<script lang="ts">
    import Modal from '$lib/components/modal/Modal.svelte';
    import { enhance } from '$app/forms';
    import { slide } from 'svelte/transition';
    import type { ZodIssue } from 'zod';

    export let addressModal: HTMLDialogElement;
    export let errors: ZodIssue[] | undefined;
    let addressLine1: string;
    let addressLine2: string;
    let addressCity: string;
    let addressPostcode: string;
</script>

<Modal bind:dialog={addressModal}>
    <h5>Edit shipping address</h5>
    <hr />
    <form method="POST" action="?/updateaddress" use:enhance on:submit={() => addressModal.close()}>
        <input
            class="w-full input"
            name="line1"
            placeholder="Address line 1"
            bind:value={addressLine1}
        />
        <input
            class="w-full input"
            name="line2"
            placeholder="Address line 2"
            bind:value={addressLine2}
        />
        <input class="w-full input" name="city" placeholder="Town/City" bind:value={addressCity} />
        <input
            class="w-full input"
            name="postcode"
            placeholder="Postcode"
            bind:value={addressPostcode}
        />
        {#each errors ?? [] as error}
            <p class="text-red-600" transition:slide>{error.message}</p>
        {/each}
        <button class="mb-4 btn">Save</button>
    </form>
</Modal>
