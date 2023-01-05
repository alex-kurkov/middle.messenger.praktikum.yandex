import { EventBus } from ".";


export enum StoreEvents {
  UPDATED = 'flow:store_did_update'
}

class Store extends EventBus {
  private state: MSNStore = {};
  __instance: Nullable<Store> = null;

  constructor() {
    super();
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
  }

  init(initialState: MSNStore) {
    this.state = initialState;
    this.emit(StoreEvents.UPDATED);
  }

  public getState(): MSNStore {
      return this.state;
  }

  public setState(path: string, value: unknown): void {
    this.set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
    console.log('STATE:', this.state)
  }

  private set(state: typeof this.state, path: string, value: unknown): void {
    this.state = Object.assign(state, { [path]: value });
  }
}

const store = new Store();
export default store;
