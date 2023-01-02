import Block from 'core/Block';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import template from 'bundle-text:./profileEditData.hbs';
import './profileEditData.css';

interface ProfileEditProps {
  inputs: InputProps[];
  formButton: {
    text: string;
  };
}

// @ts-ignore
@withLiveValidator
export class ProfileEditData extends Block<Omit<ProfileEditProps, 'inputs'>> {
  static componentName = 'ProfileEditData';

  render() {
    return template;
  }
}
