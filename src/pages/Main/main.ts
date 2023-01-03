import Block from 'core/Block';
import template from 'bundle-text:./main.hbs';

export class Main extends Block<object> {
  static componentName = 'Main';

  render() {
    return template;
  }
}
