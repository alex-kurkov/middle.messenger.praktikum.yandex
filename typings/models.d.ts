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
  };

  export type MSNChatMessage = {
    user: {
      first_name: string;
      second_name: string;
      avatar: typeof Blob | string | URL;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content?: string;
    isFile?: boolean;
    url?: typeof Blob | string | URL;
  };

  export type MSNChatMessages = {
    id: string | number;
    title: string;
    avatar: typeof Blob | string | URL;
    unread_count: Nullable<number>;
    messages: MSNChatMessage[];
  };

  export type MSNUser = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    id: string;
    avatar: string;
  };
}

export {};
