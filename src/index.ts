import './app.css';
import { store } from 'core';
import { registerAllComponents } from 'utils/registerConponents';
import router from 'controllers/router';
import { chats, chatMessages } from './app-data';

store.init({
  user: null,
  interface: {
    sideMenuExpanded: false,
  },
  chats,
  chatMessages,
});
registerAllComponents();

document.addEventListener('DOMContentLoaded', () => {
  router.start();

  // if (!store.getState().user) {
  //   router.go('./login')
  // }
});
