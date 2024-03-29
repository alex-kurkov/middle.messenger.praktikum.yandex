import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';
import { BASE_URL } from './base-api';

const fetchChats = new Fetch(`${BASE_URL}/chats`);

class ChatsAPI {
  @handleResponse
  requestChats(offset = 0, limit = 20, title = ''): Promise<XMLHttpRequest> {
    return fetchChats.get('', {
      data: { offset, limit, title },
    });
  }
  @handleResponse
  createChat(title: string): Promise<XMLHttpRequest> {
    return fetchChats.post('', { data: { title } });
  }
  @handleResponse
  deleteChat(id: number): Promise<XMLHttpRequest> {
    return fetchChats.delete('', { data: { chatId: id } });
  }
}

export default new ChatsAPI();
