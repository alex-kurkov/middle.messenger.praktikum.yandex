declare global {
  interface MSNStore {
    interface?: {
      sideMenuExpanded: boolean;
    };
    user?: MSNUser;
    chats?: MSNChat[];
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
