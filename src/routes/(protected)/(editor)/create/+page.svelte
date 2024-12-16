<script lang="ts">
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h4>Upload Article</h4>

<form method="POST" action="?/createarticle" use:enhance>
	<input class="input" type="text" name="slug" placeholder="Slug" required />
	<p class="text-gray-500">The slug is an id for the article, part of the URL.</p>
	<input class="input" type="text" name="title" placeholder="Title" required />
	<textarea
		class="py-2 mb-4 w-full max-w-2xl min-h-24 max-h-80 input"
		name="body"
		placeholder="Article body (HTML)"
		required
	/>
	{#each form?.errors ?? [] as error}
		<p class="text-red-600" transition:slide>{error.message}</p>
	{/each}
	<button class="btn">Submit</button>
</form>
