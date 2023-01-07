import { store } from 'core';
import chatsApi from 'services/api/chats-api';
import { activeChatController } from './active-chat-controller';
import { interfaceController } from './interface-controller';

class ChatCommonController {
  // @handleError(handler)
  public async addChat(title: string) {
    await chatsApi.createChat(title).then((xhr) => {
      if (xhr.status === 200) {
        this.getChats().then(() => {
          interfaceController.hideAddChatDialog();
          const { id } = JSON.parse(xhr.response);
          activeChatController.setActiveChat(id);
          interfaceController.showEditChatDialog();
        });
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public async getChats() {
    await chatsApi.requestChats().then((xhr) => {
      if (xhr.status === 200) {
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
