import { Router } from 'express';
import googleAuthController from '@/api/controllers/auth/google/signin';
import googleAuthCallbackController from '@/api/controllers/auth/google/callback';

export const authRouter = Router();

authRouter.get('/google_signin', googleAuthController);
authRouter.get('/google_callback', googleAuthCallbackController);
