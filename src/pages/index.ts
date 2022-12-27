export { default as Login } from './Login';
export { default as Main } from './Main';
export { default as Profile } from './Profile';
export { default as Messenger } from './Messenger';
export { default as NotFound } from './NotFound';

export enum Pathnames {
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
