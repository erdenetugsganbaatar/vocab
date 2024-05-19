import { SignJWT, jwtVerify } from 'jose';

// jwt token expiration time must be no more than 24 hours
// TODO: change expiration time before going for production
const JWT_TOKEN_EXPIRATION_TIME = '1year';
const JWT_SECRET_USER = new TextEncoder().encode(process.env.JWT_SECRET_USER);

export const createUserJWT = async (payload: Record<string, any>) => {
  return await new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setExpirationTime(JWT_TOKEN_EXPIRATION_TIME).setIssuedAt().sign(JWT_SECRET_USER);
};

export const verifyUserJWT = async <PayloadType>(token?: string) => {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify<PayloadType>(token, JWT_SECRET_USER);

    return payload;
  } catch (e) {
    console.error(e);
    return null;
  }
};
