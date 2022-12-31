import { EventBus } from ".";

export enum StoreEvents {
  UPDATED = 'flow:store_did_update'
}

class Store extends EventBus {
  private state: object = {};
  __instance: Nullable<Store> = null;

  constructor() {
    super();
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
  }

  public getState(): typeof this.state {
    return this.state;
  }

  public setState(path: string, value: unknown): void {
    this.set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
  }

  private set(state: typeof this.state, path: string, value: unknown): void {
    this.state = Object.assign(state, { [path]: value });
  }
}

const store = new Store();
export default store;
