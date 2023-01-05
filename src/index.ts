import './app.css';
import { store } from 'core';
import { registerAllComponents } from 'utils/registerConponents';
import router from 'controllers/router';
import { chats, chatMessages, activeChat } from './app-data';
import { userAuthController } from 'controllers/user-auth-controller';

store.init({
  user: null,
  interface: {
    sideMenuExpanded: false,
  },
  chats,
  chatMessages,
  activeChat,
});
registerAllComponents();

document.addEventListener('DOMContentLoaded', () => {
  router.start();

  if (!window.localStorage.getItem('isLoggedIn')) {
    router.go('/login');
  } else {
    userAuthController.auth(router.currentPathname);
  }
});
