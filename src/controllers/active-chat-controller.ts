import { store } from 'core';
import chatsCommonApi from 'services/api/chats-common-api';
import chatsApi from 'services/api/chats-api';
import { interfaceController } from './interface-controller';
import { MessengerSocket } from 'core/MessengerSocket';
import { findChatById } from 'utils/findChatById';
import { cloneDeep } from 'utils/cloneDeep';
import { withPromisifiedErrorHandle }
  from 'services/property-decorators/withPromisifiedErrorHandle';

class ActiveChatController {
  @withPromisifiedErrorHandle
  public setActiveChat(id: number) {
    if (store.state.activeChatId === id) {
      return;
    }

    if (!findChatById(store.state.chats, id)) {
      return Promise.reject({
        type: 'store',
        message: `провален поиск нужного чата в сторе... полностью... 
        Cреди загруженных чатов ${store.state.chats} не найден чат с id: ${id}`,
      });
    }
    store.setState('activeChatId', id);
    store.setState('activeChatUsers', []);
    store.setState('chatMessages', []);

    this.getChatUsers(id);
    this.setSocket(id);
    return Promise.resolve();
  }

  private async setSocket(CHAT_ID: number) {
    await chatsCommonApi.requestChatToken(CHAT_ID).then((xhr) => {
      const USER_ID = store.state.user?.id;
      const TOKEN: string = JSON.parse(xhr.response).token;
      if (USER_ID && TOKEN && CHAT_ID) {
        store.state.socket?.close();
        store.setState('socket', new MessengerSocket(USER_ID, CHAT_ID, TOKEN));
      } else {
        return Promise.reject({
          type: 'logic',
          message: 'unable to set socket connection',
        });
      }
    });
  }

  public resetActiveChat() {
    store.setState('activeChatId', null);
    store.setState('activeChatUsers', []);
    store.state.socket?.close();
  }

  @withPromisifiedErrorHandle
  public async deleteActiveChat() {
    const chatId = store.state.activeChatId;
    if (!chatId) {
      return Promise.reject({ type: 'store', message: 'no active chat found' });
    }

    await chatsApi.deleteChat(chatId).then(() => {
      this.resetActiveChat();
      interfaceController.hideEditChatDialog();
      const newChats = cloneDeep(
        store.state.chats.filter((chat) => chat.id !== chatId)
      );
      store.setState('chats', newChats);
      return Promise.resolve();
    });
  }

  @withPromisifiedErrorHandle
  setActiveChatAvatar(chatId: number, e: Event) {
    const fileInput = e.target as HTMLInputElement;
    const files: FileList | null = fileInput.files;
    if (files) {
      const image: File = files[0];
      const formData = new FormData();
      formData.set(`avatar`, image, image.name);
      formData.set(`chatId`, chatId.toString());
      chatsCommonApi.updateChatAvatar(formData).then((xhr) => {
        const { id, avatar } = JSON.parse(xhr.response);
        const { chats } = store.state;
        const updatedChats = chats.map((chat) => {
          if (chat.id === id) {
            chat.avatar = avatar;
          }
          return cloneDeep(chat);
        });
        store.setState('chats', updatedChats);
      });
    }
    return Promise.resolve();
  }

  @withPromisifiedErrorHandle
  public async getChatUsers(id: number) {
    await chatsCommonApi.requestChatUsers(id).then((xhr) => {
      const fetchedUsers = JSON.parse(xhr.response);
      store.setState('activeChatUsers', fetchedUsers);
      return Promise.resolve(fetchedUsers);
    });
    return Promise.resolve();
  }

  @withPromisifiedErrorHandle
  public addChatUsers(id: number) {
    const chatId = store.state.activeChatId;
    if (!chatId) {
      return Promise.reject({ type: 'store', message: 'no active chat found' });
    }
    const foundUsers: MSNUser[] = store.state.search.users;
    const activeChatUsers: MSNUser[] = store.state.activeChatUsers;

    if (activeChatUsers.find((user) => user?.id === id)) {
        return Promise.reject({
          type: 'logic',
          message: 'нельзя добавить пользоватея второй раз',
        });
    }

    chatsCommonApi.updateChatUsers(chatId, [id]).then(() => {
      const addedUser = foundUsers.find((user: MSNUser) => user?.id === id);
      if (addedUser) {
        store.setState('activeChatUsers', [addedUser, ...activeChatUsers]);
      }
    });
    return Promise.resolve();
  }

  @withPromisifiedErrorHandle
  public async deleteChatUsers(id: number) {
    const chatId = store.state.activeChatId;
    if (!chatId) {
      return Promise.reject({ type: 'store', message: 'no active chat found' });
    }
    const currentUsers: MSNUser[] = store.state.activeChatUsers;
    const me: MSNUser = store.state.user;

    if (me?.id === id) {
      return Promise.reject({
        type: 'logic',
        message: 'нельзя удалить себя, но можно удалить чат',
      });
    }

    await chatsCommonApi.deleteChatUsers(chatId, [id]).then(() => {
      const updatedUsers = cloneDeep(
        currentUsers.filter((user: MSNUser) => user?.id !== id)
      );

      if (updatedUsers) {
        store.setState('activeChatUsers', updatedUsers);
      }
    });
    return Promise.resolve();
  }
}

export const activeChatController = new ActiveChatController();
