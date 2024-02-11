// 1
import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient();

// 3
async function main() {
    const newSong = await prisma.song.create({
        data: {
            title: "My first song",
            artist: "Some artist",
            genre: "Some genre",
            album: "Some album",
            year: 2021,
        },
    });

    const allSongs = await prisma.song.findMany();
    console.log(allSongs);
}

// 4
main()
    .catch((e) => {
        throw e;
    })
    // 5
    .finally(async () => {
        await prisma.$disconnect();
    });