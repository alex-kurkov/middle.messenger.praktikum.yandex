import { store } from 'core';
import chatsApi from 'services/api/chats-api';
import { interfaceController } from './interface-controller';

class ChatCommonController {
  // @handleError(handler)
  public async addChat(title: string) {
    await chatsApi.createChat(title).then((xhr) => {
      if (xhr.status === 200) {
        this.getChats();
        interfaceController.hideAddChatDialog();
        return Promise.resolve();
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public async getChats() {
    await chatsApi.requestChats(0, 10, '').then((xhr) => {
      if (xhr.status === 200) {
      // renew application chatsList
        console.log(xhr.response)
        const newChats = JSON.parse(xhr.response);
        store.setState('chats', newChats);
  
        return Promise.resolve();
      } else {
        throw new Error(xhr.response);
      }
    });
  }
}

export const chatCommonController = new ChatCommonController();
