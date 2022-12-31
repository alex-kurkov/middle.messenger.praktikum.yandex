import { Router } from 'core';
import { Login, Main, Profile, Messenger, NotFound } from 'pages';
import props from '../mock-data/pages-props';

enum Pathnames {
  MAIN = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  NOT_FOUND = '/400',
  ERROR = '/500',
  MESSENGER = '/messenger',
  MESSENGER_NARROW = '/messenger-narrow',
  PROFILE = '/profile',
  PROFILE_PASSWORD = '/profile-password',
  PROFILE_DATA = '/profile-data',
}

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
    dataView: true,
  })
  .use(Pathnames.PROFILE_PASSWORD, Profile, {
    ...props.profile,
    passwordView: true,
  });

export default router;
