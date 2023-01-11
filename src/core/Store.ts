import { EventBus } from ".";
import { set } from "utils/set";

const initialState: MSNStore = {
  user: null,
  interface: {
    sideMenuExpanded: true,
    addChatDialogVisible: false,
    editChatDialog: false,
    chatUsersEditVisible: false,
  },
  chats: [],
  chatMessages: [],
  activeChat: {
    chat: null,
    chatUsers: [],
  },
  search: {
    users: [],
    chats: [],
  },
  socket: null,
};

export enum StoreEvents {
  UPDATED = 'flow:store_did_update'
}

class Store extends EventBus {
  private state = initialState;
  __instance: Nullable<Store> = null;

  constructor() {
    super();
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
  }

  init() {
    this.emit(StoreEvents.UPDATED);
  }

  public getState(): MSNStore {
    return this.state;
  }

  public setState(path: string, value: unknown): void {
    this.state = set(this.state, path, value) as MSNStore;
    console.log(`STATE CHANGED AT PATH ${path}:`, this.state);
    this.emit(StoreEvents.UPDATED);
  }
}

const store = new Store();
export default store;
