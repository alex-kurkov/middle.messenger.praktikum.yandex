import { Fetch } from 'core';

export const fetchChats = new Fetch('ya-praktikum.tech/api/v2/chats', true);

export class chatsAPI {
  requestChats(
    offset?: number,
    limit?: number,
    title?: string
  ): Promise<XMLHttpRequest> {
    return fetchChats.get('', {
      data: { offset, limit, title },
    });
  }

  createChat(title: string): Promise<XMLHttpRequest> {
    return fetchChats.post('/archive', { data: { title } });
  }

  deleteChat(id: number): Promise<XMLHttpRequest> {
    return fetchChats.delete('/archive', { data: { id } });
  }


}
