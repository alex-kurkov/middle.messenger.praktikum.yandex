import Block from 'core/Block';
import template from 'bundle-text:./notFound.hbs';

export class NotFoundPage extends Block<object> {
  static componentName = 'NotFoundPage';

  render() {
    return template;
  }
}
