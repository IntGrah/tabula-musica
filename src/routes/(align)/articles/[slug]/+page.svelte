<script>
	export let data;
	const { title, body, createdAt, user } = data;
</script>

<article class="mx-auto max-w-3xl p-6">
	<h1>{title}</h1>
	<p><time datetime={createdAt.toISOString()}>{createdAt.toDateString()}</time></p>
    <p>{user?.name}</p>
	<div>{@html body}</div>
</article>
