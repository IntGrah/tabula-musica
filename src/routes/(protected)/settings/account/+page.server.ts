import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async (event) => {
    const user = event.locals.user!;

    const userAccounts = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
            raven: true,
        },
    });

    return { raven: userAccounts?.raven };
};
