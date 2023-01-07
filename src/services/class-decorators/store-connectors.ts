//@ts-nocheck
import { store } from 'core';
import { StoreEvents } from 'core/Store';
import { isEqual } from 'utils/isEqual';

function connect(mapStateToProps: (state: MSNStore) => object) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <C extends { new (...args: any[]): object }>(
    ClassConstructor: C
  ) {
    return class extends ClassConstructor<object> {
      constructor(props) {
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.UPDATED, () => {
          const newState = mapStateToProps(store.getState());

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
export const withActiveChat = connect((s) => ({ chat: s.activeChat?.chat }));
export const withActiveChatUsers = connect((s) => ({ users: s.activeChat?.users }));
export const withAvatar = connect((s) => ({ avatar: s.user?.avatar }));
export const withSideMenu = connect((s) => ({
  sideMenuExpanded: s.interface?.sideMenuExpanded,
}));
export const withAddChatDialog = connect((s) => ({
  addChatDialogVisible: s.interface?.addChatDialogVisible,
}));
export const withEditChatDialog = connect((s) => ({
  editChatDialogVisible: s.interface?.editChatDialog,
}));
export const withChatUsersEditVisible = connect((s) => ({
  chatUsersEditVisible: s.interface?.chatUsersEditVisible,
}));
export const withChats = connect((s) => ({ chats: s.chats }));
export const withChatMessages = connect((s) => ({
  chatMessages: s.chatMessages,
}));
