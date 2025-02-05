import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { read } from "$app/server";

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get("q")?.trim();
    if (!query) redirect(303, "/");

    const keywords = query.split(/\s+/).map((s) => s.toLowerCase());

    const articlesFiles: Record<string, string> = import.meta.glob("/articles/*.md", {
        query: "?url",
        import: "default",
        eager: true,
    });
    const assets = Object.values(articlesFiles);

    const articles = assets.map((a) => read(a).text());
    const res = await Promise.all(articles);

    const zip = <A, B>(a: A[], b: B[]): [A, B][] => a.map((k, i) => [k, b[i]]);

    const results = zip(assets, res);

    const filtered = results.filter(
        ([title, body]) =>
            body
                .split(/\s+/g)
                .map((s) => s.toLowerCase())
                .find((kw) => keywords.some((k) => kw.includes(k))) ||
            title
                .split(/\s+/g)
                .map((s) => s.toLowerCase())
                .find((kw) => keywords.some((k) => kw.includes(k))),
    );

    return { query, articles: filtered };
};
