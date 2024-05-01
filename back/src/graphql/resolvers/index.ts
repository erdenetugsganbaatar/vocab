import { Resolvers } from "@/generated/graphql";
import * as queries from "./queries";

const resolvers: Resolvers = {
  Query: queries,
};

export default resolvers;
