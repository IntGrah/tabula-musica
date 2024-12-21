import prisma from "$lib/server/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const user = event.locals.user;

    if (!user) {
        return { emailAutoFill: "" };
    }

    const userAccounts = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
            raven: { select: { email: true } },
        },
    });

    if (userAccounts?.raven?.email) {
        return { emailAutoFill: userAccounts.raven.email };
    }

    return { emailAutoFill: "" };
};

export const actions: Actions = {
    async contact({}) {
        console.log("Not implemented");
    },
};
