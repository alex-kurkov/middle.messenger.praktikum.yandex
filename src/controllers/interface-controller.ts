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
}

export const interfaceController = new InterfaceController();
