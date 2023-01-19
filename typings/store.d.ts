import { MessengerSocket } from "services/messenger-socket/messenger-socket";

declare global {
  type MSNStore = {
    interface: {
      sideMenuExpanded: boolean;
      addChatDialogVisible: boolean;
      editChatDialog: boolean;
      chatUsersEditVisible: boolean;
      moreMessagesAvailable: boolean;
    };
    user: MSNUser;
    chats: MSNChat[];
    activeChat: Nullable<MSNChat>;
    activeChatId: Nullable<number>;
    activeChatUsers: MSNUser[];
    chatMessages: MSNChatMessage[];
    search: {
      users: [];
      chats: [];
    };
    socket: Nullable<MessengerSocket>;
  };
}

export {};
