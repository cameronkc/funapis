import type { Api } from "@prisma/client"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ fetch }) => {
    const response = await fetch('/api/entries')
    const entries: Api[] = await response.json()
    return { entries }
}
