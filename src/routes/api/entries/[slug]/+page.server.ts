import { error } from "@sveltejs/kit";

import db from "$lib/database";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    console.log(params)

    const entry = await db.api.findUnique({
        where: { slug: params.slug }
    })

    if(!entry) {
        throw error(404, 'Api not found')
    }

    return { entry }
}