import Block from 'core/Block';
import template from './profileEditPassword.hbs';
import router from 'controllers/router';

export class ProfileEditPasswordPage<
  P extends { user: MSNUser }
> extends Block<P> {
  static componentName = 'ProfileEditPasswordPage';
  constructor(props: P) {
    super({
      ...props,
      handleCloseIconClick: () => {
        router.go('/profile');
      },
    });
  }

  render() {
    return template;
  }
}
