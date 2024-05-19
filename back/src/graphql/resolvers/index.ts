import { Resolvers } from '@/generated/graphql';
import * as queries from './queries';
// import * as mutations from './mutations';

const resolvers: Resolvers = {
  Query: queries,
  // Mutation: mutations,
};

export default resolvers;
