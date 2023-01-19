import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';
import { BASE_URL } from './base-api';

const fetchChatsArchive = new Fetch(`${BASE_URL}/chats`);

class ChatsArchiveAPI {
  @handleResponse
  requestArchivedChats(
    offset?: number,
    limit?: number,
    title?: string
  ): Promise<XMLHttpRequest> {
    return fetchChatsArchive.get('/archive', {
      data: { offset, limit, title },
    });
  }
  @handleResponse
  createArchivedChatById(chatId: number): Promise<XMLHttpRequest> {
    return fetchChatsArchive.post('/archive', { data: { chatId } });
  }

  @handleResponse
  updateArchivedChatById(chatId: number): Promise<XMLHttpRequest> {
    return fetchChatsArchive.post('/unarchive', { data: { chatId } });
  }
}

export default new ChatsArchiveAPI();
