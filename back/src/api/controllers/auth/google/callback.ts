import { UserModel } from '@/db/mongoose/user';
import { createUserJWT } from '@/helpers/jwt';
import { oauth2Client } from '@/helpers/googleAuth';
import { createController } from '@/lib/controller';

export default createController(async ({ req, res }) => {
  const { code, error } = req.query;

  if (error) {
    res.status(400).send(error);
  }

  // TODO: use zod to ensure code is string
  const { tokens } = await oauth2Client.getToken(code as string);

  const { id_token: idToken } = tokens;

  if (!idToken) {
    throw new Error('cannot get id_token from code');
  }

  const loginTicket = await oauth2Client.verifyIdToken({ idToken });

  const googleUserInfo = loginTicket.getPayload();

  if (!googleUserInfo) {
    throw new Error();
  }

  const { picture, email, name, sub: googleId } = googleUserInfo;

  // create user if not exist
  // but don't update user if exist
  const user = await UserModel.findOneAndUpdate({ googleId }, { picture, email, name, googleId }, { new: true, upsert: true, setDefaultsOnInsert: true });

  const jwt = await createUserJWT({
    picture: user.picture,
    email: user.email,
    name: user.name,
  });

  res.send(jwt);
});
