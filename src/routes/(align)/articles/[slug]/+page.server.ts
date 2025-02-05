import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { read } from "$app/server";
import { marked } from "marked";

export const load: PageServerLoad = async ({ params }) => {
    try {
        const article = read(`/articles/${params.slug}`);
        const text = await article.text();
        const html = await marked.parse(text);
        return { html };
    } catch {
        error(404);
    }
};
