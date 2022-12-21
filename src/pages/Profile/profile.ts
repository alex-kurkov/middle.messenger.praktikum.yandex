import template from 'bundle-text:./profile.hbs';
import { InputProps } from 'components/input/input';
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

  render() {
    return template;
  }
}
