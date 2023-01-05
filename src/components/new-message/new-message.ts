import Block from 'core/Block';
import './new-message.css';
import template from 'bundle-text:./new-message.hbs';
import { withLiveValidator } from 'services/class-decorators/with-live-validator';

@withLiveValidator
export default class NewMessage extends Block<object> {
  static componentName = 'NewMessage';
  render() {
    return template;
  }
}
