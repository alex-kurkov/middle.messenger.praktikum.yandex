import { Router } from 'core';
import props from '../mock-data/pages-props';
import { Login, Main, Profile, Messenger, NotFound, Pathnames } from '../pages';

const router = new Router('#app');

router
  .use(Pathnames.MAIN, Main, props.mainPage)
  .use(Pathnames.LOGIN, Login, props.loginPage)
  .use(Pathnames.REGISTER, Login, props.registerPage)
  .use(Pathnames.ERROR, NotFound, props.page500)
  .use(Pathnames.NOT_FOUND, NotFound, props.page400)
  .use(Pathnames.MESSENGER, Messenger, props.messengerExpanded)
  .use(Pathnames.MESSENGER_NARROW, Messenger, props.messengerNarrow)
  .use(Pathnames.PROFILE, Profile, { ...props.profile, mainView: true })
  .use(Pathnames.PROFILE_DATA, Profile, {
    ...props.profile,
    passwordView: true,
  })
  .use(Pathnames.PROFILE_PASSWORD, Profile, {
    ...props.profile,
    dataView: true,
  });

export default router;
