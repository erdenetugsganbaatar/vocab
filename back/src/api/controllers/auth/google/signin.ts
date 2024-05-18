import { authorizationUrl } from '@/helpers/googleAuth';
import { createController } from '@/lib/controller';

export default createController(async ({ res }) => {
  res.redirect(authorizationUrl);
  res.end();
});
