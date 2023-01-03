import template from 'bundle-text:./profile.hbs';
import router from 'controllers/router';
import { store } from 'core';
import { authApi } from 'services/api';
import { withUser } from 'services/class-decorators/store-connectors';
import Block from '../../core/Block';
import './profile.css'


//@ts-ignore
@withUser
export class Profile extends Block<object> {
  static componentName = 'Profile';


  constructor(props: object) {
    super(props);
    const CloseIcon = this.getContent().querySelector('[data-ref="closeIcon"]');
    if (CloseIcon) {
      CloseIcon.addEventListener('click', () => {
        router.go('/messenger');
      });
    }
    const LogoutBtn = this.getContent().querySelector('[data-ref="logoutBtn"]');

    if (LogoutBtn) {
      LogoutBtn.addEventListener('click', () => {
        authApi.requestLogout().then((xhr) => {
          if (xhr.status === 200) {
            store.setState('user', null);
            router.go('/login');
            return;
          } else {
            throw new Error(xhr.response);
          }
        });
      });
    }
  }
  render() {
    return template;
  }
}
