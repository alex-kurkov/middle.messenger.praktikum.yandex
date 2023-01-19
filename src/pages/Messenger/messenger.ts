import Block from 'core/Block';
import template from 'bundle-text:./messenger.hbs';

export class Messenger extends Block<object> {
  static componentName = 'Messenger';

  render() {
    return template;
  }
}
