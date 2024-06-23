import { Resolver } from "@/generated/graphql";
import { GraphQLResolveInfo } from "graphql";

export function useResolver<TParent, TArgs, TContext, TReturn>(
  resolverFn: (params: {
    parent: TParent;
    args: TArgs;
    context: TContext;
    info: GraphQLResolveInfo;
  }) => Promise<TReturn> | TReturn
): Resolver<TReturn, TParent, TContext, TArgs> {
  return (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
  ) => resolverFn({ parent, args, context, info });
}
