import prisma from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const pageQuery = event.url.searchParams.get("page");
    let page = 0;

    if (pageQuery) {
        const parsedPage = parseInt(pageQuery);
        if (!isNaN(parsedPage) && parsedPage > 0) {
            page = parsedPage - 1;
        }
    }

    const sizeQuery = event.url.searchParams.get("size");
    let size = 10;

    if (sizeQuery) {
        const parsedSize = parseInt(sizeQuery);
        if (!isNaN(parsedSize) && parsedSize >= 5) {
            size = parsedSize;
        }
    }

    const start = Date.now();
    const articles = await prisma.article.findMany({
        skip: page * size,
        take: size,
        select: {
            slug: true,
            title: true,
            createdAt: true,
            user: {
                select: {
                    name: true,
                },
            },
        },
    });
    const articlesTotal = await prisma.article.count();
    const ms = Date.now() - start;

    return { articles, articlesTotal, ms, page, size };
};
