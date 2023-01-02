import Block from 'core/Block';
import './profileEditPassword.css';
import template from 'bundle-text:./profileEditPassword.hbs';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';

interface ProfileEditProps {
  formTitle?: string;
  inputs: InputProps[];
  formButton: {
    text: string;
  };
}

// @ts-ignore
@withLiveValidator
export class ProfileEditPassword extends Block<Omit<ProfileEditProps, 'inputs'>> {
  static componentName = 'ProfileEditPassword';

  render() {
    return template;
  }
}
