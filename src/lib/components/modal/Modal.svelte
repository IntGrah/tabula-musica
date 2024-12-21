<script lang="ts">
    import type { Snippet } from "svelte";
    import { self, createBubbler, stopPropagation } from "svelte/legacy";

    const bubble = createBubbler();

    interface Props {
        dialog: HTMLDialogElement;
        children: Snippet;
    }

    let { dialog = $bindable(), children }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
    class="m-auto w-96 max-w-full max-h-full rounded-lg backdrop:bg-black/40"
    bind:this={dialog}
    onclick={self(() => dialog.close())}
>
    <button class="absolute top-2 right-2 size-8 p-2 text-gray-500" onclick={() => dialog.close()}>
        <img src="/close.svg" alt="Close" />
    </button>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="size-full px-8 py-4 bg-amber-50 text-gray-700"
        onclick={stopPropagation(bubble("click"))}
    >
        {@render children()}
    </div>
</dialog>
