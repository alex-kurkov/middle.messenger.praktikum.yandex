import { store } from 'core';
import chatsApi from 'services/api/chats-api';
import { activeChatController } from './active-chat-controller';
import { interfaceController } from './interface-controller';

class ChatCommonController {
  public async addChat(title: string) {
    await chatsApi.createChat(title).then((xhr) => {
        this.getChats().then(() => {
          interfaceController.hideAddChatDialog();
          const { id } = JSON.parse(xhr.response);
          activeChatController.setActiveChat(id);
          interfaceController.showEditChatDialog();
        });
    });
  }

  public async getChats() {
    await chatsApi.requestChats().then((xhr) => {
        const newChats = JSON.parse(xhr.response);
        store.setState('chats', newChats);
        return Promise.resolve();
    });
  }
}

export const chatCommonController = new ChatCommonController();
