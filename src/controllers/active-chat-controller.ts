import { store } from 'core';
import chatsCommonApi from 'services/api/chats-common-api';
import chatsApi from 'services/api/chats-api';
import { interfaceController } from './interface-controller';
import { MessengerSocket } from 'core/MessengerSocket';
import { findChatById } from 'utils/findChatById';
import { cloneDeep } from 'utils/cloneDeep';

class ActiveChatController {
  // @handleError(handler)
  public setActiveChat(id: number) {
    if (store.state.activeChatId === id) {
      return;
    }

    if (!findChatById(store.state.chats, id)) {
      throw new Error(
        `провален поиск нужного чата в сторе... полностью... 
        Cреди загруженных чатов ${store.state.chats} не найден чат с id: ${id}`
      );
    }
      store.setState('activeChatId', id)
      store.setState('activeChatUsers', []);

    this.getChatUsers(id).then(() =>
      this.getMessengerToken(id).then((TOKEN) => {
        const USER_ID = store.state.user?.id;
        const CHAT_ID = id;
        if (USER_ID && TOKEN && CHAT_ID) {
          store.state.socket?.close();
          store.setState(
            'socket',
            new MessengerSocket(USER_ID, CHAT_ID, TOKEN)
          );
        } else {
          throw new Error('unable to set socket connection');
        }
      })
    );
  }

  private getMessengerToken(id: number) {
    return chatsCommonApi.requestChatToken(id).then((xhr) => {
      if (xhr.status === 200) {
        const token: string = JSON.parse(xhr.response).token;
        return Promise.resolve(token);
      }
      return Promise.reject(
        `Не удалось получить токен для чата с id: ${id}. Сообщение сервера: ${xhr.response}`
      );
    });
  }

  // private getUnreadCount(id: number) {
  //   return chatsCommonApi.requestUnreadCount(id).then((xhr) => {
  //     if (xhr.status === 200) {
  //       const { unread_count } = JSON.parse(xhr.response);
  //       return Promise.resolve(unread_count);
  //     }
  //     return Promise.reject(
  //       `Не удалось получить данные. Сообщение сервера: ${xhr.response}`
  //     );
  //   });
  // }

  public resetActiveChat() {
    store.setState('activeChatId', null)
    store.setState('activeChatUsers', [])
    store.state.socket?.close();
  }

  public async deleteActiveChat() {
    const chatId = store.state.activeChatId;
    if (!chatId) {
      throw new Error('no active chat found');
    }

    await chatsApi.deleteChat(chatId).then((xhr) => {
      if (xhr.status === 200) {
        this.resetActiveChat();
        interfaceController.hideEditChatDialog();
        const newChats = cloneDeep( store
          .state
          .chats.filter((chat) => chat.id !== chatId));
        store.setState('chats', newChats);
        return Promise.resolve();
      }
      return Promise.reject(
        `Не удалось удалить чат с id: ${chatId}. Сообщение сервера: ${xhr.response}`
      );
    });
  }

  setActiveChatAvatar(chatId: number, e: Event) {
    const fileInput = e.target as HTMLInputElement;
    const files: FileList | null = fileInput.files;
    if (files) {
      const image: File = files[0];
      const formData = new FormData();
      formData.set(`avatar`, image, image.name);
      formData.set(`chatId`, chatId.toString());
      chatsCommonApi.updateChatAvatar(formData).then((xhr) => {
        if (xhr.status === 200) {
          const { id, avatar } = JSON.parse(xhr.response);

          const { chats } = store.state;

          const updatedChats = chats.map((chat) => {
            if (chat.id === id) {
              chat.avatar = avatar;
            }
            return cloneDeep(chat);
          });


          store.setState('chats', updatedChats);

          return Promise.resolve();
        }
        throw new Error(xhr.response);
      });
    }
  }

  public async getChatUsers(id: number) {
    await chatsCommonApi.requestChatUsers(id).then((xhr) => {
      if (xhr.status === 200) {
        const fetchedUsers = JSON.parse(xhr.response);
        store.setState('activeChatUsers', fetchedUsers);
        return Promise.resolve(fetchedUsers);
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public addChatUsers(id: number) {
    const chatId = store.state.activeChatId;
    if (!chatId) {
      throw new Error('no active chat found');
    }
    const foundUsers: MSNUser[] = store.state.search.users;
    const activeChatUsers: MSNUser[] = store.state.activeChatUsers;

    if (activeChatUsers.find((user) => user?.id === id)) {
      throw new Error('нельзя добавить пользоватея второй раз');
    }

    chatsCommonApi.updateChatUsers(chatId, [id]).then((xhr) => {
      if (xhr.status === 200) {
        // TODO from cache first
        const addedUser = foundUsers.find(
          (user: MSNUser) => user?.id === id
        );
        if (addedUser) {
          store.setState('activeChatUsers', [addedUser, ...activeChatUsers]);
        }
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public async deleteChatUsers(id: number) {
    const chatId = store.state.activeChatId;
    if (!chatId) {
      throw new Error('no active chat found');
    }
    const currentUsers: MSNUser[] = store.state.activeChatUsers;

    await chatsCommonApi.deleteChatUsers(chatId, [id]).then((xhr) => {
      if (xhr.status === 200) {
        // TODO from cache first

        const updatedUsers = cloneDeep(currentUsers.filter(
          (user: MSNUser) => user?.id !== id
        ));

        if (updatedUsers) {
          store.setState('activeChatUsers', updatedUsers);
        }
      } else {
        throw new Error(xhr.response);
      }
    });
  }
}

export const activeChatController = new ActiveChatController();
