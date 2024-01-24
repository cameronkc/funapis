import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Entry = {
    API: string;
    Auth: string;
    Category: string;
    Cors: string;
    Description: string;
    Link: string;
    HTTPS: boolean;
};

async function getPapi(): Promise<Entry[]> {
    const response = await fetch('https://api.publicapis.org/entries');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.entries as Entry[];
}

function slugify(text:string) {
    return text.replace(/\s/g, '-').replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
}

async function main() {
    const entries = await getPapi();

    for (const api of entries) {
        console.log(api)
        await db.api.create({
            data: {
                title: api.API,
                auth: api.Auth,
                category: api.Category,
                cors: api.Cors,
                description: api.Description,
                link: api.Link,
                https: api.HTTPS,
                slug: slugify(api.API),
            }
        })
    }
}

main();