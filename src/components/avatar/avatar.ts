import Block from 'core/Block';
import './avatar.css';
import template from 'bundle-text:./avatar.hbs';

export default class Avatar extends Block<object> {
  static componentName = 'Avatar';

  render() {
    return template;
  }
}
