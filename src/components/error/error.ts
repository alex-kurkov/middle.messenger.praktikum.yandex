import Block from 'core/Block';
import './error.css';
import template from './error.hbs';

export class ErrorComponent extends Block<object> {
  static componentName = 'ErrorComponent';

  render() {
    return template;
  }
}
