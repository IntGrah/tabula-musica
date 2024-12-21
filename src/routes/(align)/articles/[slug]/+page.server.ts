import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
import { read } from "$app/server";
import { marked } from "marked";

export const load: PageServerLoad = async ({ params }) => {
    // const article = await prisma.article.findFirst({
    //     where: { slug: params.slug },
    //     select: {
    //         slug: true,
    //         title: true,
    //         body: true,
    //         createdAt: true,
    //         user: {
    //             select: {
    //                 name: true,
    //             },
    //         },
    //     },
    // });

    try {
        const article = read(`/article/${params.slug}`);
        const text = await article.text();
        const html = await marked.parse(text);
        return { html };
    } catch {
        error(404);
    }
};
