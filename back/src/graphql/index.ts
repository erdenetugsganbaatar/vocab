import { ApolloServer, BaseContext } from '@apollo/server';
import { typeDefs } from './schema/typeDefs.generated';
import { resolvers } from './schema/resolvers.generated';

export const apolloServer = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});
