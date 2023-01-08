import './app.css';
import { store } from 'core';
import { registerAllComponents } from 'utils/registerConponents';
import router from 'controllers/router';
import { userAuthController } from 'controllers/user-auth-controller';
import { chatCommonController } from 'controllers/chat-common-controller';

store.init();
registerAllComponents();

document.addEventListener('DOMContentLoaded', () => {
  router.start();

  if (!window.localStorage.getItem('isLoggedIn')) {
    router.go('/login');
  } else {
    userAuthController.auth(router.currentPathname).then(() => {
      chatCommonController.getChats();
    });
  }
});
