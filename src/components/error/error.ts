import Block from "core/Block";
import './error.css';
import template from 'bundle-text:./error.hbs';

export class ErrorComponent extends Block<{}> {
  render() {
    return template;
  }
}
