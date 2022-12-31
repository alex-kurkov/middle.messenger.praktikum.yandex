import { Fetch } from 'core';

export const fetchChatsCommon = new Fetch('ya-praktikum.tech/api/v2/chats', true);

export class chatsCommonAPI {
  requestCommonChat(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/${id}/common`, {
      data: { id },
    });
  }

  requestChatFiles(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/${id}/files`, {
      data: { id },
    });
  }

  requestChatNewMessagesCount(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/new/${id}`, {
      data: { id },
    });
  }

  // formdata: chatId: number, avatar: File
  updateChatAvatar(formData: FormData): Promise<XMLHttpRequest> {
    return fetchChatsCommon.put('/avatar', { data: formData });
  }

  requestChatUsers(
    id: number,
    offset: number,
    limit: number,
    name: string,
    email: string
  ): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/${id}/users`, {
      data: { offset, limit, name, email },
    });
  }

  // addChatUsers?!
  updateChatUsers(chatId: number, users: number[]): Promise<XMLHttpRequest> {
    return fetchChatsCommon.put('/users', {
      data: {
        users,
        chatId,
      },
    });
  }

  deleteChatUsers(chatId: number, users: number[]): Promise<XMLHttpRequest> {
    return fetchChatsCommon.delete('/users', {
      data: {
        users,
        chatId,
      },
    });
  }

  requestChatToken(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/token/${id}`, {});
  }
}
