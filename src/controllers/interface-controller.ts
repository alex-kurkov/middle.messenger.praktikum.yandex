import { store } from 'core';

class InterfaceController {
  __instance: Nullable<InterfaceController> = null;
  constructor() {
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
  }

  public toggleSideMenu(): void {
    const currentInterfaceState = store.getState()?.interface;
    store.setState('interface', {
      ...currentInterfaceState,
      sideMenuExpanded: !currentInterfaceState?.sideMenuExpanded,
    });
  }

  public expandSideMenu(): void {
    store.setState('interface', {
      ...store.getState().interface,
      sideMenuExpanded: true,
    });
  }

  public showAddChatDialog(): void {
    store.setState('interface', {
      ...store.getState().interface,
      addChatDialogVisible: true,
    });
  }
  public hideAddChatDialog(): void {
    store.setState('interface', {
      ...store.getState().interface,
      addChatDialogVisible: false,
    });
  }

  public showEditChatDialog(): void {
    store.setState('interface', {
      ...store.getState().interface,
      editChatDialog: true,
    });
  }
  public hideEditChatDialog(): void {
    store.setState('interface', {
      ...store.getState().interface,
      editChatDialog: false,
    });
  }
  public showChatUsersEdit(): void {
    store.setState('interface', {
      ...store.getState().interface,
      chatUsersEditVisible: true,
    });
  }
}

export const interfaceController = new InterfaceController();
