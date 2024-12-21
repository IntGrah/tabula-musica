<script lang="ts">
    let { data } = $props();
    const { query, articles, ms } = data;

    const results = data.articles.length === 1 ? "result" : "results";
</script>

<h3>Search results</h3>

<div>
    <p>Search "{query}" returned {articles.length} {results} ({ms / 1000} seconds)</p>
    {#each articles as { slug, title, body, createdAt, user }}
        <div>
            <h4>
                <a class="hover:underline decoration-2 text-violet-900" href={`/articles/${slug}`}>
                    {title}
                </a>
            </h4>
            <p><time datetime={createdAt.toISOString()}>{createdAt.toDateString()}</time></p>
            <p>{user?.name}</p>
            <div>{body.replace(/<[^>]*>/g, "")}</div>
        </div>
    {/each}
</div>
