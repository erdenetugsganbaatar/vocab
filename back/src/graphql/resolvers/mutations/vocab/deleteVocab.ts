import { VocabModel } from "@/db/mongoose";
import { MutationResolvers } from "@/generated/graphql";

export const deleteVocab: MutationResolvers["deleteVocab"] = async (
  _root,
  args
) => {
  const { id } = args;
  await VocabModel.deleteOne({ _id: id });
  return id;
};
