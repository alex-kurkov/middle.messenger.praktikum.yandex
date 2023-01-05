import { Fetch } from 'core';

export const fetchChats = new Fetch('https://ya-praktikum.tech/api/v2/chats');

class ChatsAPI {
  requestChats(
    offset: number,
    limit: number,
    title: string
  ): Promise<XMLHttpRequest> {
    return fetchChats.get('', {
      data: { offset, limit, title },
    });
  }

  createChat(title: string): Promise<XMLHttpRequest> {
    return fetchChats.post('', { data: { title } });
  }

  deleteChat(id: number): Promise<XMLHttpRequest> {
    return fetchChats.delete('', { data: { id } });
  }
}

export default new ChatsAPI();
