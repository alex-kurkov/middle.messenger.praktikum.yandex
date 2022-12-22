import Block from 'core/Block';
import './modal.css';
import template from 'bundle-text:./modal.hbs';

export class Modal extends Block<object> {
  static componentName = 'Modal';

  render() {
    return template;
  }
}
