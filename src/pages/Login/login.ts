import Block from 'core/Block';
import template from 'bundle-text:./login.hbs';
import { withLiveValidator } from '../../services/class-decorators/with-live-validator';

// @ts-ignore
@withLiveValidator
export class LoginPage extends Block<object> {
  static componentName = 'LoginPage';

  render() {
    return template;
  }
}
