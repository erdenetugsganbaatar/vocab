import { ApolloServer, BaseContext } from '@apollo/server';
import { readFileSync } from 'node:fs';
import resolvers from './resolvers';

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf-8');

export const apolloServer = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});
