<script>
	import { page } from "$app/stores";

	let query = $page.url.searchParams.get('q');
</script>

<search class="grow h-12">
	<form class="relative h-10 py-1" action="/search">
		<img class="absolute left-2 inset-y-4 size-5" src="/search.svg" alt="" />
		<input
			name="q"
			class="w-full max-w-40 xs:max-w-52 sm:max-w-64 input !pl-9"
			placeholder="Search..."
			autocomplete="off"
			required
			value={query ?? ''}
			on:invalid={(e) => e.preventDefault()}
		/>
	</form>
</search>
