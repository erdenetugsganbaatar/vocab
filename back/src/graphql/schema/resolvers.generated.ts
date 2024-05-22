/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { addVocab as Mutation_addVocab } from './vocab/resolvers/Mutation/addVocab';
import    { listUsers as Query_listUsers } from './user/resolvers/Query/listUsers';
import    { listVocabs as Query_listVocabs } from './vocab/resolvers/Query/listVocabs';
import    { User } from './user/resolvers/User';
import    { Vocab } from './vocab/resolvers/Vocab';
    export const resolvers: Resolvers = {
      Query: { listUsers: Query_listUsers,listVocabs: Query_listVocabs },
      Mutation: { addVocab: Mutation_addVocab },
      
      User: User,
Vocab: Vocab
    }