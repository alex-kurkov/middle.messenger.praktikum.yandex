import Block from 'core/Block';
import './new-message.css';
import template from 'bundle-text:./new-message.hbs';

export class NewMessage extends Block<object> {
  static componentName = 'NewMessage';
  render() {
    return template;
  }
}
