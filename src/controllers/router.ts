import { Router } from 'core';
import {
  LoginPage,
  MainPage,
  ProfilePage,
  ProfileEditDataPage,
  ProfileEditPasswordPage,
  MessengerPage,
  NotFoundPage,
} from 'pages';
import props from '../app-data';

enum Pathnames {
  MAIN = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  NOT_FOUND = '/400',
  ERROR = '/500',
  MESSENGER = '/messenger',
  PROFILE = '/profile',
  PROFILE_PASSWORD = '/profile-password',
  PROFILE_DATA = '/profile-data',
}

const router = new Router('#app');

router
  .use(Pathnames.MAIN, MainPage, props.mainPage)
  .use(Pathnames.LOGIN, LoginPage, props.loginPage)
  .use(Pathnames.REGISTER, LoginPage, props.registerPage)
  .use(Pathnames.ERROR, NotFoundPage, props.page500)
  .use(Pathnames.NOT_FOUND, NotFoundPage, props.page400)
  .use(Pathnames.MESSENGER, MessengerPage, props.messenger)
  .use(Pathnames.PROFILE, ProfilePage, {})
  .use(Pathnames.PROFILE_DATA, ProfileEditDataPage, props.profileDataPage)
  .use(
    Pathnames.PROFILE_PASSWORD,
    ProfileEditPasswordPage,
    props.profilePasswordPage
  );

export default router;
