import { Fetch, store } from 'core';

const fetchChatsCommon = new Fetch('https://ya-praktikum.tech/api/v2/chats');

class ChatsCommonAPI {
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
    offset = 0,
    limit = 10,
    name = '',
    email= '',
  ): Promise<XMLHttpRequest> {
    const id = store.getState().activeChat?.chat?.id;
    if (!id) {
      throw new Error('no active chat found in STORE');
    }

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
    return fetchChatsCommon.post(`/token/${id}`, {});
  }
}

export default new ChatsCommonAPI();
