import { EventBus } from ".";
import { chatMessages } from "../app-data";

const initialState: MSNStore = {
  user: null,
  interface: {
    sideMenuExpanded: true,
    addChatDialogVisible: false,
    editChatDialog: false,
    chatUsersEditVisible: false,
  },
  chats: [],
  chatMessages,
  activeChat: {
    chat: null,
    users: [],
  },
  search: {
    users: [],
    chats: []
  },
  socket: null
}

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
    this.set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
    console.log('STATE:', this.state);
  }

  private set(state: typeof this.state, path: string, value: unknown): void {
    this.state = Object.assign(state, { [path]: value });
  }
}

const store = new Store();
export default store;
