declare global {
  export type MSNChat = {
    id: number;
    title: string;
    avatar: typeof Blob | string | URL;
    unread_count: Nullable<number>;
    last_message: {
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
    };
    active: boolean;
  }
}

export {};
