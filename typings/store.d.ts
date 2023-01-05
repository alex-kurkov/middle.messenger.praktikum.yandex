declare global {
  interface MSNStore {
    interface?: {
      sideMenuExpanded: boolean;
      addChatDialogVisible: boolean;
    };
    user?: MSNUser;
    chats?: MSNChat[];
    newChats?: MSNChat[];
    activeChat?: MSNChat,
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
