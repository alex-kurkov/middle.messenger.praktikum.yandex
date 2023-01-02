import Block from 'core/Block';
import './sideMenu.css';
import template from 'bundle-text:./sideMenu.hbs';
import { withChats, withInterface } from '../../services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';

// @ts-ignore
@withInterface
// @ts-ignore
@withChats
export class SideMenu extends Block<object> {
  static componentName = 'SideMenu';
  
  componentDidMount(): void {
    const toggleMenuBtn = this.getContent().querySelector('[data-ref="toggleMenu"]');
    if (toggleMenuBtn) {
      toggleMenuBtn.addEventListener('click', () => {
        interfaceController.toggleSideMenu();
      })
    }
  }

  render() {
    return template;
  }
}
