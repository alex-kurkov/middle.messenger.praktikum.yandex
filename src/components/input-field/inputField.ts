import Block from 'core/Block';
import './inputField.css';
import template from './inputField.hbs';

export class InputField extends Block<object> {
  static componentName = 'InputField';

  render() {
    return template;
  }
}
