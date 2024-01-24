import type { Api } from "@prisma/client"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/entries')
    const entries: Api[] = await response.json()
    return { entries }
}