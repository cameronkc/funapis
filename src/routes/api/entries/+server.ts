import { json, type RequestHandler } from "@sveltejs/kit";

import db from "$lib/database";

export const GET: RequestHandler = async () => {
    const entries = await db.api.findMany()

    return json(entries)
}