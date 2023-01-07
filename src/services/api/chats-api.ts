import { Fetch } from 'core';

export const fetchChats = new Fetch('https://ya-praktikum.tech/api/v2/chats');

class ChatsAPI {
  requestChats(
    offset = 0,
    limit = 20,
    title = '',
  ): Promise<XMLHttpRequest> {
    return fetchChats.get('', {
      data: { offset, limit, title },
    });
  }

  createChat(title: string): Promise<XMLHttpRequest> {
    return fetchChats.post('', { data: { title } });
  }

  deleteChat(id: number): Promise<XMLHttpRequest> {
    return fetchChats.delete('', { data: {chatId: id } });
  }
}

export default new ChatsAPI();
