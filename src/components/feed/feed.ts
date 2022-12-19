import Block from "core/Block";
import './feed.css';
import template from 'bundle-text:./feed.hbs';

export class Feed extends Block<{}> {
  render() {
    return template;
  }
}
