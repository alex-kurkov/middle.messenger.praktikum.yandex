import Block from 'core/Block';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import template from 'bundle-text:./profileEditData.hbs';
import './profileEditData.css';
import { withUser } from 'services/class-decorators/store-connectors';
import avatarTemplate from '../../assets/avatar-template.jpg';
import router from 'controllers/router';

// @ts-ignore
@withLiveValidator
// @ts-ignore
@withUser
export class ProfileEditDataPage<P extends { user: MSNUser }> extends Block<P> {
  static componentName = 'ProfileEditDataPage';

  constructor(props: P) {
    super({ ...props, avatarTemplate });
  }

  componentDidMount(): void {
    const CloseIcon = this.getContent().querySelector('[data-ref="closeIcon"]');

    CloseIcon?.addEventListener('click', () => {
      router.go('/profile');
    });
  }

  render() {
    return template;
  }
}
