import Block from 'core/Block';
import './modal.css';
import template from './modal.hbs';

export class Modal extends Block<object> {
  static componentName = 'Modal';

  render() {
    return template;
  }
}
