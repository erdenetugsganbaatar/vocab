import { UserTokenPayload } from "./user";

export interface Context {
    user: UserTokenPayload | null
}