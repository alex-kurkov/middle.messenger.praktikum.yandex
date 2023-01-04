import Block from 'core/Block';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import template from 'bundle-text:./profileEditData.hbs';
import './profileEditData.css';
import { withUser } from 'services/class-decorators/store-connectors';
import avatarTemplate from '../../assets/avatar-template.jpg';
import router from 'controllers/router';
import { ValidatorController } from 'core';
import { userChangeController } from 'controllers/user-change-controller';

// @ts-ignore
@withLiveValidator
// @ts-ignore
@withUser
export class ProfileEditDataPage<P extends { user: MSNUser }> extends Block<P> {
  static componentName = 'ProfileEditDataPage';

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
      handleAvatarChange: (e: Event) => {
        userChangeController.changeAvatar(e);
      },
    });
  }

  render() {
    return template;
  }
}
