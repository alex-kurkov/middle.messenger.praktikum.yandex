import Block from 'core/Block';
import './feed-title.css';
import template from 'bundle-text:./feed-title.hbs';
import { withUser } from '../../services/class-decorators/store-connectors';


// @ts-ignore
@withUser
export class FeedTitle extends Block<object> {
  static componentName = 'FeedTitle';
  render() {
    return template;
  }
}
