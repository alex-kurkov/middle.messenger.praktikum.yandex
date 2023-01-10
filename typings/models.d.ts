declare global {
  export type MSNChat = {
    id: number;
    title: string;
    avatar: Nullable<string>;
    unread_count: Nullable<number>;
    last_message: Nullable<{
      user: {
        first_name: string;
        second_name: string;
        avatar: typeof Blob | string | URL;
        email: string;
        login: string;
        phone: string;
      };
      time: string;
      content: string;
    }>;
  };

  export type MSNChatMessage = {
    chat_id: number;
    time: string;
    type: 'message' | 'file' | 'sticker';
    user_id: string | number;
    content: string;
    file?: {
      id: number;
      user_id: number;
      path: string;
      filename: string;
      content_type: string;
      content_size: number;
      upload_date: string;
    };
  };

  export type MSNUser = Nullable<{
    first_name: string;
    second_name: string;
    display_name?: Nullable<string>;
    login: string;
    email: string;
    phone: string;
    id: number;
    avatar: Nullable<string>;
  }>;
}

export {};
