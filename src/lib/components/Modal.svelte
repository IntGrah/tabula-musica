<script lang="ts">
	export let dialog: HTMLDialogElement;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="m-auto w-96 max-w-full max-h-full rounded-lg backdrop:bg-black/40"
	bind:this={dialog}
	on:click|self={() => dialog.close()}
>
	<button class="absolute top-2 right-2 size-8 p-2 text-gray-500" on:click={() => dialog.close()}>
		<img src="/icons/close.svg" alt="Close" />
	</button>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="size-full px-8 py-4 bg-amber-50 text-gray-700" on:click|stopPropagation>
		<slot />
	</div>
</dialog>
