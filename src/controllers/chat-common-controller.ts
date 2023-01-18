import { store } from 'core';
import chatsApi from 'services/api/chats-api';
import { activeChatController } from './active-chat-controller';
import { interfaceController } from './interface-controller';

class ChatCommonController {
  public async addChat(title: string) {
    await chatsApi.createChat(title).then((xhr) => {
      this.getChats().then(() => {
        interfaceController.hideAddChatDialog();

        try {
          const id = JSON.parse(xhr.response).id;
          activeChatController.setActiveChat(id);
          interfaceController.showEditChatDialog();
        } catch (error) {
          return Promise.reject({
            message: 'НЕвозможно распарсить json с id',
            type: 'logic',
          });
        }
      });
    });
  }

  public async getChats() {
    await chatsApi.requestChats().then((xhr) => {
      try {
        const newChats: MSNChat[] = JSON.parse(xhr.response);
        store.setState('chats', newChats);
        return Promise.resolve();
      } catch (error) {
         return Promise.reject({
           message: 'НЕвозможно распарсить json с {chats: []}',
           type: 'logic',
         });
      }
    });
  }
}

export const chatCommonController = new ChatCommonController();
