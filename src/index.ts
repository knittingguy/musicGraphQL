import { ApolloServer } from "apollo-server";
import { context } from "./context"; 

// 1
import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context,
});

const port = 3900;
// 2
server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});