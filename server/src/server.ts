import { ApolloServer } from 'apollo-server';

import { schema } from './schema';

const PORT = process.env.PORT || 4200;

const server = new ApolloServer({ schema });

server.listen({ port: PORT }).then(() => {
  console.log(`Started on port ${PORT}`)
});
