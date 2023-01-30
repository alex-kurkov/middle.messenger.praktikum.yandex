import { EventBus } from ".";
import { set } from "utils/set";

const initialState: MSNStore = {
  user: null,
  interface: {
    sideMenuExpanded: true,
    addChatDialogVisible: false,
    editChatDialogVisible: false,
    chatUsersEditVisible: false,
    moreMessagesAvailable: false,
  },
  chats: [],
  chatMessages: [],
  activeChat: null,
  activeChatId: null,
  activeChatUsers: [],
  search: {
    users: [],
    chats: [],
  },
  socket: null,
};

export enum StoreEvents {
  UPDATED = 'flow:store_did_update'
}

export class Store extends EventBus {
  private _state;
  __instance: Nullable<Store> = null;

  constructor(initState: MSNStore | object) {
    super();
    if (this.__instance) {
      return this.__instance;
    }
    this.__instance = this;
    this._state = initState;
  }

  init() {
    this.emit(StoreEvents.UPDATED);
  }

  public get state(): MSNStore {
    return this._state as MSNStore;
  }

  public setState(path: string, value: unknown): void {
    this._state = set(this._state, path, value) as MSNStore;
    // console.log(`STATE CHANGED AT PATH ${path} CURRENT STATE:`, this._state);
    this.emit(StoreEvents.UPDATED);
  }
}

const store = new Store(initialState);
export default store;
