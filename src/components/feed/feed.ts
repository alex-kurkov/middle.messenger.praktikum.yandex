import Block from 'core/Block';
import './feed.css';
import template from 'bundle-text:./feed.hbs';
import { InputProps } from 'components/input/input';

interface FeedProps {
  inputs: InputProps[];
  empty: boolean;
  chatMessages: MSNChat[];
}

export class Feed extends Block<FeedProps> {
  static componentName = 'Feed';
  render() {
    return template;
  }
}
