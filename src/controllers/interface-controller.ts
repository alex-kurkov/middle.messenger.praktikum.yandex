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
}

export const interfaceController = new InterfaceController();
