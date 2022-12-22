import Block from 'core/Block';
import './menuMessage.css';
import template from 'bundle-text:./menuMessage.hbs';

export class MenuMessage extends Block<object> {
  static componentName = 'MenuMessage';

  render() {
    return template;
  }
}
