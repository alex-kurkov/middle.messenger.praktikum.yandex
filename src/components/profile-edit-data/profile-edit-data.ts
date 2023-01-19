import Block from 'core/Block';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import template from 'bundle-text:./profile-edit-data.hbs';
import './profile-edit-data.css';
import { withUser } from 'services/class-decorators/store-connectors';
import avatarTemplate from '../../assets/avatar-template.jpg';
import { ValidatorController } from 'core';
import { userChangeController } from 'controllers/user-change-controller';

type TypeInputNames =
  | 'first_name'
  | 'second_name'
  | 'display_name'
  | 'login'
  | 'phone'
  | 'email';

@withLiveValidator
@withUser
export class ProfileEditData<
  P extends { user: MSNUser; inputs: Array<{ value?: string; name: string }> }
> extends Block<P> {
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

  componentDidMount(): void {
    if (this.props.user) {
      const inputs = this.getContent().querySelectorAll('input');
      for (const input of inputs) {
        const key: TypeInputNames = input.name as TypeInputNames;
        if (input.type === 'file') {
          continue;
        }
        input.value = this.props.user[key] || '';
      }
    }
  }
}
