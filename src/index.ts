import './app.css';
import { store } from 'core';
import { registerAllComponents } from 'helpers/registerConponents';
import router from 'controllers/router';
import { chats, chatMessages } from './mock-data/pages-props';
import avatar1 from './assets/avatar-template.png';


store.init({
  user: {
    first_name: 'Илья Сергеевич',
    second_name: 'Джонсонов',
    display_name: 'Илья Весенний',
    avatar: avatar1,
    email: 'my@email.com',
    login: 'userLogin',
    phone: '8(911)-222-33-22',
  },
  interface: {
    sideMenuExpanded: false,
  },
  chats,
  chatMessages,
});
registerAllComponents();

document.addEventListener('DOMContentLoaded', () => {
  router.start();
});
