import Block from 'core/Block';
import template from 'bundle-text:./profileEditData.hbs';
import router from 'controllers/router';

export class ProfileEditDataPage<P extends { user: MSNUser }> extends Block<P> {
  static componentName = 'ProfileEditDataPage';

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
