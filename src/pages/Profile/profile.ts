import template from 'bundle-text:./profile.hbs';
import router from 'controllers/router';
import Block from '../../core/Block';

export class Profile<P extends object> extends Block<P> {
  static componentName = 'Profile';

  constructor(props: P) {
    super({
      ...props,
      handleCloseIconClick: () => {
        router.go('/messenger');
      },
    });
  }
  
  render() {
    return template;
  }
}
