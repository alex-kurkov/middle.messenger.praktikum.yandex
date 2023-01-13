import './app.css';
import { store } from 'core';
import { registerAllComponents } from 'utils/registerConponents';
import router from 'controllers/router';
import { userAuthController } from 'controllers/user-auth-controller';

store.init();
registerAllComponents();

document.addEventListener('DOMContentLoaded', () => {
  router.start();
  userAuthController.auth(router.currentPathname);
});
