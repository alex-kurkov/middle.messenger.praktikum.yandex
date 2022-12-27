import './app.css';
import { registerAllComponents } from 'helpers/registerConponents';
import router from 'controllers/router';

registerAllComponents();

document.addEventListener('DOMContentLoaded', () => {
  router.start();

});
