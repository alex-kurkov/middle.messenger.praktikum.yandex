import template from 'bundle-text:./profile.hbs';
import router from 'controllers/router';
import Block from '../../core/Block';

interface ProfileProps {
  avatarInput: {
    type: string;
    name: string;
    required: boolean;
    id: string;
    accept: string;
  };
  editPasswordForm: {
    formTitle?: null;
    formName?: string;
    formButton: {
      text: string;
    };
    inputs: InputProps[];
    addon?: null;
  };
  editPersonalDataForm: {
    formTitle?: null;
    formName?: string;
    formButton: {
      text: string;
    };
    inputs: InputProps[];
    addon?: null;
  };
  profileEditButtons: {
    type: string;
    name: string;
    text: string;
    link: string;
  }[];
  mainView?: boolean;
  passwordView?: boolean;
  dataView?: boolean;
}

export class Profile extends Block<ProfileProps> {
  static componentName = 'Profile';

  componentDidMount(): void {
    const CloseIcon = this.getContent().querySelector('[data-ref="closeIcon"]');
    if (CloseIcon) {
      CloseIcon.addEventListener('click', () => {
        router.go('/messenger');
      });
    }
  }

  render() {
    return template;
  }
}
