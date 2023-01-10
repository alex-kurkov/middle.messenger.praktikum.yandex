import { store } from 'core';
import chatsCommonApi from 'services/api/chats-common-api';
import chatsApi from 'services/api/chats-api';
import { interfaceController } from './interface-controller';
import { MessengerSocket } from 'core/MessengerSocket';

class ActiveChatController {
  // @handleError(handler)
  public setActiveChat(id: number) {
    const newActiveChat: MSNChat | undefined = store.getState().chats?.find(
      (chat) => chat.id === id
    );

    if (!newActiveChat) {
      throw new Error(
        `провален поиск нужного чата в сторе... полностью... 
        Cреди загруженных чатов не найден чат с id: ${id}`
      );
    }
    store.setState('activeChat', {
      ...store.getState().activeChat,
      chat: newActiveChat,
      chatUsers: [],
    });
    store.setState('chatMessages', []);

    this.getChatUsers(newActiveChat.id).then(() =>
      this.getMessengerToken(newActiveChat.id)
        .then((TOKEN) => {
          const USER_ID = store.getState().user?.id;
          const CHAT_ID = newActiveChat.id;
          if (USER_ID && TOKEN && CHAT_ID) {
            store.getState().socket?.close();
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
    store.setState('activeChat', {
      chat: null,
      chatUsers: [],
      token: null,
    });
    store.getState().socket?.close();
  }

  public async deleteActiveChat() {
    const chatId = store.getState().activeChat.chat?.id;
    if (!chatId) {
      throw new Error('no active chat found');
    }

    await chatsApi.deleteChat(chatId).then((xhr) => {
      if (xhr.status === 200) {
        this.resetActiveChat();
        interfaceController.hideEditChatDialog();
        const newChats = store
          .getState()
          .chats.filter((chat) => chat.id !== chatId);
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

          const { activeChat, chats } = store.getState();

          store.setState('activeChat', {
            ...activeChat,
            chat: {
              ...activeChat.chat,
              avatar,
            },
          });

          const updatedChats = chats?.map((chat) => {
            if (chat.id === id) {
              chat.avatar = avatar;
            }
            return chat;
          });

          store.setState('chats', updatedChats);

          return Promise.resolve;
        }
        throw new Error(xhr.response);
      });
    }
  }

  public async getChatUsers(id: number) {
    const users = store.getState().activeChat?.users;
    if (users && users?.length > 0) {
      return Promise.resolve(users);
    }

    await chatsCommonApi.requestChatUsers(id).then((xhr) => {
      if (xhr.status === 200) {
        const fetchedUsers = JSON.parse(xhr.response);
        const { activeChat } = store.getState();
        store.setState('activeChat', { ...activeChat, users: fetchedUsers });
        return Promise.resolve(fetchedUsers);
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public addChatUsers(id: number) {
    const chatId = store.getState().activeChat.chat?.id;
    if (!chatId) {
      throw new Error('no active chat found');
    }
    const searchedUsers: MSNUser[] = store.getState().search.users;
    const currentUsers: MSNUser[] = store.getState().activeChat.users;
    if (currentUsers.find((user) => user?.id === id)) {
      throw new Error('нельзя добавить пользоватея второй раз');
    }

    chatsCommonApi.updateChatUsers(chatId, [id]).then((xhr) => {
      if (xhr.status === 200) {
        // TODO from cache first
        const addedUser = searchedUsers.find(
          (user: MSNUser) => user?.id === id
        );
        if (addedUser) {
          const activeChat = store.getState().activeChat;

          store.setState('activeChat', {
            ...activeChat,
            users: [...activeChat.users, addedUser],
          });
        }
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public async deleteChatUsers(id: number) {
    const chatId = store.getState().activeChat.chat?.id;
    if (!chatId) {
      throw new Error('no active chat found');
    }
    const currentUsers: MSNUser[] = store.getState().activeChat.users;

    await chatsCommonApi.deleteChatUsers(chatId, [id]).then((xhr) => {
      if (xhr.status === 200) {
        // TODO from cache first

        const updatedUsers = currentUsers.filter(
          (user: MSNUser) => user?.id !== id
        );

        if (updatedUsers) {
          const activeChat = store.getState().activeChat;

          store.setState('activeChat', {
            ...activeChat,
            users: updatedUsers,
          });
        }
      } else {
        throw new Error(xhr.response);
      }
    });
  }

}


export const activeChatController = new ActiveChatController();
