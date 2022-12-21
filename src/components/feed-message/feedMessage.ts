import Block from 'core/Block';
import template from 'bundle-text:./feedMessage.hbs';
import './feedMessage.css';

export class FeedMessage extends Block<object> {
  static componentName = 'FeedMessage';

  render() {
    return template;
  }
}
