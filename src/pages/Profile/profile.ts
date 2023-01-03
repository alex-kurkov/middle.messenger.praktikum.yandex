import template from 'bundle-text:./profile.hbs';
import router from 'controllers/router';
import { userAuthController } from 'controllers/user-auth-controller';
import { withUser } from 'services/class-decorators/store-connectors';
import Block from '../../core/Block';
import avatarTemplate from '../../assets/avatar-template.jpg';
import './profile.css';

//@ts-ignore
@withUser
export class Profile<
  P extends { user: MSNUser }
> extends Block<P> {
  static componentName = 'Profile';

  constructor(props: P) {
    super({...props, avatarTemplate});

    const LogoutBtn = this.getContent().querySelector('[data-ref="logoutBtn"]');

    LogoutBtn?.addEventListener('click', userAuthController.logout);
  }

  componentDidMount(): void {
    const CloseIcon = this.getContent().querySelector('[data-ref="closeIcon"]');

    if (CloseIcon) {
      CloseIcon.addEventListener('click', () => {
        router.go('/messenger');
      });
    }
  }
  render() {
    return template;
  }
}
