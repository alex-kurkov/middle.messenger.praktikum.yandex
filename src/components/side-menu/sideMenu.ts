import Block from 'core/Block';
import './sideMenu.css';
import template from 'bundle-text:./sideMenu.hbs';

export class SideMenu extends Block<object> {
  static componentName = 'SideMenu';

  render() {
    return template;
  }
}
