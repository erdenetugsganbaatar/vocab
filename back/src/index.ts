require('module-alias/register');

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { getErrorMessage } from '@/lib';
import { expressMiddleware } from '@apollo/server/express4';
import { apolloServer } from '@/graphql';
import { connect } from '@/helpers/mongoose';

config();

export const startServer = async () => {
  const app = express();
  const { PORT, WEB_URL } = process.env;

  app.use(express.json());
  app.use(
    cors({
      origin: WEB_URL,
      credentials: true,
    }),
  );
  app.use(cookieParser());

  await connect();

  await apolloServer.start();
  const apolloMiddleware = expressMiddleware(apolloServer);
  app.use('/graphql', apolloMiddleware);

  app.use((error: any, _req: Request, res: Response, _next: NextFunction): void => {
    res.status(500).send({ error: getErrorMessage(error) });
  });

  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
};

startServer();
