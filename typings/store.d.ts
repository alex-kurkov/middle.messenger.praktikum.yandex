import { MessengerSocket } from "services/messenger-socket/messenger-socket";

declare global {
  interface MSNStore {
    interface: {
      sideMenuExpanded: boolean;
      addChatDialogVisible: boolean;
      editChatDialog: boolean;
      chatUsersEditVisible: boolean;
    };
    user: MSNUser;
    chats: MSNChat[];
    activeChat: {
      chatUsers: MSNUser[];
      chat: Nullable<MSNChat>;
    };
    chatMessages: MSNChatMessage[];
    search: {
      users: [];
      chats: [];
    };
    socket: Nullable<MessengerSocket>;
  }
}

export {};
