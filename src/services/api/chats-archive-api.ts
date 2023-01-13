import { Fetch } from 'core';

export const fetchChatsArchive = new Fetch('https://ya-praktikum.tech/api/v2/chats');

export class ChatsArchiveAPI {
  requestArchivedChats(
    offset?: number,
    limit?: number,
    title?: string
  ): Promise<XMLHttpRequest> {
    return fetchChatsArchive.get('/archive', {
      data: { offset, limit, title },
    });
  }

  createArchivedChatById(chatId: number): Promise<XMLHttpRequest> {
    return fetchChatsArchive.post('/archive', { data: { chatId } });
  }

  // unarchive...
  updateArchivedChatById(chatId: number): Promise<XMLHttpRequest> {
    return fetchChatsArchive.post('/unarchive', { data: { chatId } });
  }
}
