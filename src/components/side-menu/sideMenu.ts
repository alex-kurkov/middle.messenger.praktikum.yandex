import Block from 'core/Block';
import './sideMenu.css';
import template from './sideMenu.hbs';
import {
  withActiveChatId,
  withChats,
  withSideMenu,
} from '../../services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';
import router from 'controllers/router';
import { withLiveValidator } from 'services/class-decorators/with-live-validator';
import { ValidatorController } from 'core';

@withSideMenu
@withChats
@withLiveValidator
@withActiveChatId
export class SideMenu extends Block<object> {
  static componentName = 'SideMenu';

  constructor(props: object) {
    const expandSideMenu = interfaceController.expandSideMenu;
    const toggleSideMenu = interfaceController.toggleSideMenu;
    const handleSearch = () => {
        this.eventBus.emit(ValidatorController.EVENTS.FORM_SUBMIT);
    }
    const goToProfilePage = () => {
      router.go('/profile');
    };
    const addChat = () => {
      interfaceController.showAddChatDialog()
    };

    super({
      ...props,
      toggleSideMenu,
      addChat,
      expandSideMenu,
      goToProfilePage,
      handleSearch,
    });
  }

  render() {
    return template;
  }
}
