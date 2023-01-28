//@ts-nocheck
import { store } from 'core';
import { StoreEvents } from 'core/Store';
import { cloneDeep } from 'utils/cloneDeep';
import { findChatById } from 'utils/findChatById';
import { isEqual } from 'utils/isEqual';

function connect(mapStateToProps: (state: MSNStore) => object) {
  // eslint-disable-next-line
  return function <C extends { new (...args: any[]): object }>(
    ClassConstructor: C
  ) {
    return class extends ClassConstructor<object> {
      constructor(props) {
        let state = mapStateToProps(store.state);

        super({ ...props, ...state });

        store.on(StoreEvents.UPDATED, () => {
          const newState = cloneDeep(mapStateToProps(store.state));

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        });
      }
    };
  };
}

export const withUser = connect((s) => ({ user: s.user }));
export const withOwnId = connect((s) => ({ ownId: s.user?.id }));
export const withActiveChat = connect((s) => ({
  chat: cloneDeep(findChatById(s.chats, s.activeChatId)),
}));
export const withActiveChatId = connect((s) => ({
  activeChatId: s.activeChatId,
}));
export const withActiveChatUsers = connect((s) => ({
  users: s.activeChatUsers,
}));
export const withAvatar = connect((s) => ({ avatar: s.user?.avatar }));
export const withSideMenu = connect((s) => ({
  sideMenuExpanded: s.interface.sideMenuExpanded,
}));
export const withAddChatDialog = connect((s) => ({
  addChatDialogVisible: s.interface.addChatDialogVisible,
}));
export const withEditChatDialog = connect((s) => ({
  editChatDialogVisible: s.interface.editChatDialogVisible,
}));
export const withChatUsersEditVisible = connect((s) => ({
  chatUsersEditVisible: s.interface.chatUsersEditVisible,
}));
export const withMoreMessagesAvailable = connect((s) => ({
  moreMessagesAvailable: s.interface.moreMessagesAvailable,
}));
export const withChats = connect((s) => ({ chats: s.chats }));
export const withChatMessages = connect((s) => ({
  chatMessages: s.chatMessages,
}));
export const withSearchUsers = connect((s) => ({
  users: s.search?.users,
}));
export const withSocketMessenger = connect((s) => ({
  messenger: s.socket,
}));
