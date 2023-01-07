import { store } from 'core';
import chatsCommonApi from 'services/api/chats-common-api';
import chatsApi from 'services/api/chats-api';
import { interfaceController } from './interface-controller';
import { chatCommonController } from './chat-common-controller';

class ActiveChatController {
  // @handleError(handler)
  public async setActiveChat(id: number) {
    const { chats } = store.getState();
    if (!chats) {
      return Promise.reject('провален поиск чатов в сторе... полностью...');
    }

    const newActiveChat = chats.find((chat) => chat.id === id);
    if (!newActiveChat) {
      return Promise.reject(
        `Cреди загруженных чатов не найден чат с id: ${id}`
      );
    }

    store.setState('activeChat', {
      ...store.getState().activeChat,
      chat: newActiveChat,
    });

    // токен для мессенджера и сохранить его куда-то...
    // await chatsCommonApi.requestChatToken(id).then((xhr) => {
    //   if (xhr.status === 200) {
    //     // TODO set token
    //     return Promise.resolve();
    //   }
    //   return Promise.reject(
    //     `Не удалось получить токен для чата с id: ${id}. Сообщение сервера: ${xhr.response}`
    //   );
    // });

    // юзеров получить и сохранить куда-то...
    // await chatsCommonApi.requestChatUsers(id, 0, 10, '', '').then((xhr) => {
    //   if (xhr.status === 200) {
    //     // TODO set users
    //     return Promise.resolve();
    //   }
    //   return Promise.reject(
    //     `Не удалось получить токен для чата с id: ${id}. Сообщение сервера: ${xhr.response}`
    //   );
    // });
  }

  public resetActiveChat() {
    store.setState('activeChat', {
      chat: null,
      chatUsers: [],
      token: null,
    });
  }

  public async deleteActiveChat(id: number) {
    await chatsApi.deleteChat(id).then((xhr) => {
      if (xhr.status === 200) {
        this.resetActiveChat();
        interfaceController.hideEditChatDialog();
        const newChats = store
          .getState()
          .chats?.filter((chat) => chat.id !== id);
        store.setState('chats', newChats);
        return Promise.resolve();
      }
      return Promise.reject(
        `Не удалось удалить чат с id: ${id}. Сообщение сервера: ${xhr.response}`
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
      chatsCommonApi.updateChatAvatar(formData)
        .then((xhr) => {
          if (xhr.status === 200) {
            const { id, avatar } = JSON.parse(xhr.response);
            
            const { activeChat, chats } = store.getState();

            store.setState('activeChat', {
              ...activeChat,
              chat: {
                ...activeChat?.chat,
                avatar,
              },
            });

            const updatedChats = chats?.map(chat => {
              if (chat.id === id) {
                chat.avatar = avatar;
              }
              return chat;
            });
            
            store.setState('chats', updatedChats);

            return Promise.resolve;
          }
          throw new Error(xhr.response);
      })

    }
  }
}

export const activeChatController = new ActiveChatController();
