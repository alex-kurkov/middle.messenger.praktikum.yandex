import Block from 'core/Block';
import './sideMenu.css';
import template from 'bundle-text:./sideMenu.hbs';
import {
  withChats,
  withSideMenu,
} from '../../services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';
import router from 'controllers/router';

// @ts-ignore
@withSideMenu
// @ts-ignore
@withChats
export class SideMenu extends Block<object> {
  static componentName = 'SideMenu';

  constructor(props: object) {
    const expandSideMenu = interfaceController.expandSideMenu;
    const toggleSideMenu = interfaceController.toggleSideMenu;
    const goToProfilePage = () => {
      router.go('/profile');
    };
    const addChat = () => {
      console.log('chat add process');
    };
    const toggleSound = () => {
      console.log('sound toggled');
    };

    super({
      ...props,
      toggleSideMenu,
      toggleSound,
      addChat,
      expandSideMenu,
      goToProfilePage,
    });
  }

  render() {
    return template;
  }
}
