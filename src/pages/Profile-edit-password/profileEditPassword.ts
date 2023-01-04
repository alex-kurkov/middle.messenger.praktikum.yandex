import Block from 'core/Block';
import './profileEditPassword.css';
import template from 'bundle-text:./profileEditPassword.hbs';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import router from 'controllers/router';
import avatarTemplate from '../../assets/avatar-template.jpg';
import { withUser } from 'services/class-decorators/store-connectors';
import { ValidatorController } from 'core';

// @ts-ignore
@withLiveValidator
// @ts-ignore
@withUser
export class ProfileEditPasswordPage<
  P extends { user: MSNUser }
> extends Block<P> {
  static componentName = 'ProfileEditPasswordPage';
  constructor(props: P) {
    super({
      ...props,
      avatarTemplate,
      handleCloseIconClick: () => {
        router.go('/profile');
      },
      handleSubmit: () => {
        this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT);
      },
    });
  }

  render() {
    return template;
  }
}
