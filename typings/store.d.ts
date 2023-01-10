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
      chat: Nullable<MSNChat>,
      users: MSNUser[],
    };
    chatMessages: {
      id?: number;
      title?: string;
      avatar: typeof Blob | string;
      unread_count: Nullable<number>;
      messages: MSNChatMessage[];
    };
    search: {
      users: [],
      chats: [],
    },
    socket: Nullable<MessengerSocket>
  }
}

export {};
