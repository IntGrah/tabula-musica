<script lang="ts">
    let { data } = $props();
    const { query, articles } = data;

    const results = data.articles.length === 1 ? "result" : "results";
</script>

<h3>Search results</h3>

<div>
    <p>Search "{query}" returned {articles.length} {results}</p>
    {#each articles as [title, body]}
        <div>
            <h4>
                <a class="hover:underline decoration-2 text-violet-900" href={title}>
                    {title}
                </a>
            </h4>
            <!-- <p><time datetime={createdAt.toISOString()}>{createdAt.toDateString()}</time></p> -->
            <!-- <p>{user?.name}</p> -->
            <div>{body.replace(/<[^>]*>/g, "")}</div>
        </div>
    {/each}
</div>
