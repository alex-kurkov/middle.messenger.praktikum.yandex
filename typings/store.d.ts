declare global {
  interface MSNStore {
    interface?: {
      sideMenuExpanded: boolean;
      addChatDialogVisible: boolean;
      editChatDialog: boolean;
      chatUsersEditVisible: boolean;
    };
    user?: MSNUser;
    chats?: MSNChat[];
    newChats?: MSNChat[];
    activeChat?: {
      chat: Nullable<MSNChat>,
      token: Nullable<string>,
      users: MSNUser[],
    };
    chatMessages?: {
      id?: number;
      title?: string;
      avatar: typeof Blob;
      unread_count: Nullable<number>;
      messages: MSNChatMessage[];
    };
  }
}

export {};
