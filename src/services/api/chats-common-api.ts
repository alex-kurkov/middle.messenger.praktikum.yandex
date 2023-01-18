import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';
import { BASE_URL } from './base-api';

const fetchChatsCommon = new Fetch(`${BASE_URL}/chats`);

class ChatsCommonAPI {
  @handleResponse
  requestCommonChat(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/${id}/common`, {
      data: { id },
    });
  }
  @handleResponse
  requestChatFiles(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/${id}/files`, {
      data: { id },
    });
  }
  @handleResponse
  requestUnreadCount(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/new/${id}`, {
      data: { id },
    });
  }

  @handleResponse
  async updateChatAvatar(formData: FormData): Promise<XMLHttpRequest> {
    return await fetchChatsCommon.put('/avatar', { data: formData });
  }
  @handleResponse
  requestChatUsers(
    id: number,
    offset = 0,
    limit = 10,
    name = '',
    email = ''
  ): Promise<XMLHttpRequest> {
    return fetchChatsCommon.get(`/${id}/users`, {
      data: { offset, limit, name, email },
    });
  }

  // addChatUsers?!
  @handleResponse
  updateChatUsers(chatId: number, users: number[]): Promise<XMLHttpRequest> {
    return fetchChatsCommon.put('/users', {
      data: {
        users,
        chatId,
      },
    });
  }
  @handleResponse
  deleteChatUsers(chatId: number, users: number[]): Promise<XMLHttpRequest> {
    return fetchChatsCommon.delete('/users', {
      data: {
        users,
        chatId,
      },
    });
  }
  @handleResponse
  requestChatToken(id: number): Promise<XMLHttpRequest> {
    return fetchChatsCommon.post(`/token/${id}`, {});
  }
}

export default new ChatsCommonAPI();
