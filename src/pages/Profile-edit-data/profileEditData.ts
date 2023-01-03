import Block from 'core/Block';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';
import template from 'bundle-text:./profileEditData.hbs';
import './profileEditData.css';
import { withUser } from 'services/class-decorators/store-connectors';

// @ts-ignore
@withLiveValidator
// @ts-ignore
@withUser
export class ProfileEditDataPage extends Block<object> {
  static componentName = 'ProfileEditDataPage';

  render() {
    return template;
  }
}
