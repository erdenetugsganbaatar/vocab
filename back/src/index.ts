require("module-alias/register");

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { getErrorMessage } from "@/lib";
import { expressMiddleware } from "@apollo/server/express4";
import { apolloServer } from "@/graphql";
import { authRouter } from "./rest/routers/auth";
import { verifyUserJWT } from "./helpers/jwt";
import { UserTokenPayload } from "./types/user";
import { Context } from "./types/context";

config();

export const startServer = async () => {
  const app = express();
  const { PORT, WEB_URL } = process.env;
// Enable CORS for http://localhost:3000

  app.use(express.json());
  app.use(
    cors({
      origin: WEB_URL,
      credentials: true,
    })
  );
  app.use(cookieParser());

  await apolloServer.start();
  const apolloMiddleware = expressMiddleware(apolloServer, {
    context: async ({ req }) => {
      const token = req.headers.authorization?.replace(/^Bearer\s+/, "");

      const user = await verifyUserJWT<UserTokenPayload>(token);

      const context: Context = { user };

      return context;
    },
  });
  app.use("/graphql", apolloMiddleware);
  app.use("/auth", authRouter);

  app.use(
    (error: any, _req: Request, res: Response, _next: NextFunction): void => {
      res.status(500).send({ error: getErrorMessage(error) });
    }
  );

  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
};

startServer();
