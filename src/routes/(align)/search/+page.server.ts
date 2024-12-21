import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get("q")?.trim();
    if (!query) redirect(303, "/");

    const keywords = query.split(/\s+/);

    const keywordConditions = keywords.map((keyword) => ({
        OR: [
            { slug: { contains: keyword } },
            { title: { contains: keyword } },
            { body: { contains: keyword } },
        ],
    }));

    const start = Date.now();
    const articles = await prisma.article.findMany({
        where: { OR: keywordConditions },
        select: {
            slug: true,
            title: true,
            body: true,
            createdAt: true,
            user: {
                select: {
                    name: true,
                },
            },
        },
    });
    const ms = Date.now() - start;

    return { query, articles, ms };
};
