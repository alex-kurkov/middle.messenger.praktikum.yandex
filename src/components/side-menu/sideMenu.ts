import Block from "core/Block";
import './sideMenu.css';
import template from 'bundle-text:./sideMenu.hbs';

export class SideMenu extends Block<{}> {
  render() {
    return template;
  }
}
