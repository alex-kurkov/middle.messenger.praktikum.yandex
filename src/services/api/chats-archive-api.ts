import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';

const fetchChatsArchive = new Fetch('https://ya-praktikum.tech/api/v2/chats');

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
