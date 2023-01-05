import Block from 'core/Block';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import template from 'bundle-text:./profile-edit-data.hbs';
import './profile-edit-data.css';
import { withUser } from 'services/class-decorators/store-connectors';
import avatarTemplate from '../../assets/avatar-template.jpg';
import { ValidatorController } from 'core';
import { userChangeController } from 'controllers/user-change-controller';

@withLiveValidator
@withUser
export class ProfileEditData<P extends { user: MSNUser }> extends Block<P> {
  static componentName = 'ProfileEditData';

  constructor(props: P) {
    super({
      ...props,
      avatarTemplate,
      handleSubmit: () => {
        this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT);
      },
      handleAvatarChange: (e: Event) => {
        userChangeController.changeAvatar(e);
      },
    });
  }

  render() {
    return template;
  }
}
