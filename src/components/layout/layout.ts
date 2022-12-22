import Block from 'core/Block';
import template from 'bundle-text:./layout.hbs';
import './layout.css';

interface ILayout {
  class?: string;
}
export class Layout extends Block<ILayout> {
  static componentName = 'Layout';

  render() {
    return template;
  }
}
