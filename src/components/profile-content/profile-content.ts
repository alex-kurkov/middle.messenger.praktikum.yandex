import router from 'controllers/router';
import { userAuthController } from 'controllers/user-auth-controller';
import { withUser } from 'services/class-decorators/store-connectors';
import Block from '../../core/Block';
import avatarTemplate from '../../assets/avatar-template.jpg';
import template from './profile-content.hbs';
import './profile-content.css';

@withUser
export class ProfileContent<P extends { user: MSNUser }> extends Block<P> {
  static componentName = 'ProfileContent';

  constructor(props: P) {
    const handleLogout = () => userAuthController.logout();
    super({
      ...props,
      avatarTemplate,
      handleLogout,
      handleCloseIconClick: () => {
        router.go('/messenger');
      },
    });
  }

  render() {
    return template;
  }
}
