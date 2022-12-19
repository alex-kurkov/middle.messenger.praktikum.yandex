import Block from "core/Block";
import template from 'bundle-text:./template.hbs';
import './style.css';

interface ILayout {
  class?: string;
}
export class Layout extends Block<ILayout> {
  render() {
    return template;
  }
}
