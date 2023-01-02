import Block from 'core/Block';
import './profileEdit.css';
import template from 'bundle-text:./profileEdit.hbs';
import { withUser } from 'services/class-decorators/store-connectors';

interface ProfileEditProps {
  mainView: boolean;
  passwordView: boolean;
  dataView: boolean;
}
// @ts-ignore
@withUser
export class ProfileEdit extends Block<ProfileEditProps> {
  static componentName = 'ProfileEdit';

  render() {
    return template;
  }
}
