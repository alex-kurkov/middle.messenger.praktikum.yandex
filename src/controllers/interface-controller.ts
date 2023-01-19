import { store } from 'core';
import { searchController } from './search-controller';

class InterfaceController {
  __instance: Nullable<InterfaceController> = null;
  constructor() {
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
  }

  public toggleSideMenu(): void {
    const { sideMenuExpanded } = store.state.interface;
    store.setState('interface.sideMenuExpanded', !sideMenuExpanded);
  }

  public expandSideMenu(): void {
    store.setState('interface.sideMenuExpanded', true);
  }

  public showAddChatDialog(): void {
    store.setState('interface.addChatDialogVisible', true);
  }
  public hideAddChatDialog(): void {
    store.setState('interface.addChatDialogVisible', false);
  }

  public showEditChatDialog(): void {
    store.setState('interface.editChatDialog', true);
  }
  public hideEditChatDialog(): void {
    store.setState('interface.editChatDialog', false);
    searchController.clearSearchUsers();
  }
  public showChatUsersEdit(): void {
    store.setState('interface.chatUsersEditVisible', true);
  }

  scrollMessagesToTheLatter() {
    document
      .querySelector('.chat-messages__messages')
      ?.lastElementChild?.scrollIntoView();
  }
}

export const interfaceController = new InterfaceController();
