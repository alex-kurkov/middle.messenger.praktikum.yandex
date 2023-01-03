import Block from 'core/Block';
import './profileEditPassword.css';
import template from 'bundle-text:./profileEditPassword.hbs';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import router from 'controllers/router';

// @ts-ignore
@withLiveValidator
export class ProfileEditPasswordPage extends Block<object> {
  static componentName = 'ProfileEditPasswordPage';

  componentDidMount(): void {
    const CloseIcon = this.getContent().querySelector('[data-ref="closeIcon"]');
    if (CloseIcon) {
      CloseIcon.addEventListener('click', () => {
        router.back();
      });
    }
  }

  render() {
    return template;
  }
}
