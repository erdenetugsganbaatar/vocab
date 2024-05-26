import { createUserJWT } from "@/helpers/jwt";
import { oauth2Client } from "@/helpers/googleAuth";
import { createController } from "@/lib/controller";
import { UserTokenPayload } from "@/types/user";
import { prisma } from "@/lib/prisma";

export default createController(async ({ req, res }) => {
  const { code, error } = req.query;

  if (error) {
    res.status(400).send(error);
  }

  // TODO: use zod to ensure code is string
  const { tokens } = await oauth2Client.getToken(code as string);

  const { id_token: idToken } = tokens;

  if (!idToken) {
    throw new Error("cannot get id_token from code");
  }

  const loginTicket = await oauth2Client.verifyIdToken({ idToken });

  const googleUserInfo = loginTicket.getPayload();

  if (!googleUserInfo) {
    throw new Error();
  }

  const { picture, email, name, sub: googleId } = googleUserInfo;

  const user = await prisma.user.upsert({
    where: { googleId },
    create: {
      picture,
      email,
      name,
      googleId,
    },
    update: {},
  });

  const UserTokenPayload: UserTokenPayload = {
    id: user.id,
    picture: user.picture,
    email: user.email,
    name: user.name,
  };

  const jwt = await createUserJWT(UserTokenPayload);

  res.send(jwt);
});
