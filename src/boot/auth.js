import { Cookies } from 'quasar';
import initialize from 'vue-simple-auth';
import getConfig from 'app/quasar.conf.auth.js';

export default async (context) => {
  const { router, store, ssrContext } = context;
  const config = getConfig(context);
  const cookies = Cookies.parseSSR(ssrContext);

  await initialize({ router, store, cookies, config });
}
