import { objectType, extendType, nonNull, stringArg, intArg } from "nexus";

export const song = objectType({
    name: "Song",
    definition(t) {
        t.nonNull.int("idsong");
        t.nonNull.string("title");
        t.nonNull.string("artist");
        t.nonNull.string("genre");
        t.nonNull.string("album");
        t.nonNull.int("year");
    },
});

export const SongQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   // 3
            type: "Song",
            resolve(parent, args, context, info) {    // 4
                return context.prisma.song.findMany();  
            },
        });
    },
});

export const SongMutation = extendType({  // 1
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("post", {  // 2
            type: "Song",  
            args: {   // 3
                title: nonNull(stringArg()),
                artist: nonNull(stringArg()),
                genre: nonNull(stringArg()),
                album: nonNull(stringArg()),
                year: nonNull(intArg()),
            },
            
            resolve(parent, args, context) {    
                const newSong = context.prisma.song.create({   // 2
                    data: {
                        title: args.title,
                        artist: args.artist,
                        genre: args.genre,
                        album: args.album,
                        year: args.year,
                    },
                });
                return newSong;
            },
        });
    },
});