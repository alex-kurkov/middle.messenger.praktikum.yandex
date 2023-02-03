import Block from 'core/Block';
import './profile-edit-password.css';
import template from './profile-edit-password.hbs';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import avatarTemplate from '../../assets/avatar-template.jpg';
import { withUser } from 'services/class-decorators/store-connectors';
import { ValidatorController } from 'core';

@withLiveValidator
@withUser
export class ProfileEditPassword<P extends { user: MSNUser }> extends Block<P> {
  static componentName = 'ProfileEditPassword';
  constructor(props: P) {
    super({
      ...props,
      avatarTemplate,
      handleSubmit: () => {
        this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT);
      },
    });
  }

  render() {
    return template;
  }
}
