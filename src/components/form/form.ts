import Block from 'core/Block';
import './form.css';
import template from 'bundle-text:./form.hbs';

export class Form extends Block<object> {
  static componentName = 'Form';

  render() {
    return template;
  }
}
