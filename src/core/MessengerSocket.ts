import { interfaceController } from 'controllers/interface-controller';
import store from './Store';

export class MessengerSocket {
  socket: WebSocket;
  USER_ID: number;
  CHAT_ID: number;
  TOKEN: string;
  LATEST_MESSAGE_ID = 0;
  NO_MORE_MESSAGES_FLAG = false;
  SCROLL_TO_LAST = true;

  PING_PONG_ID: Nullable<NodeJS.Timer> = null;

  constructor(USER_ID: number, CHAT_ID: number, TOKEN: string) {
    this.USER_ID = USER_ID;
    this.CHAT_ID = CHAT_ID;
    this.TOKEN = TOKEN;
    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${USER_ID}/${CHAT_ID}/${TOKEN}`
    );
    this.init();
  }

  private reconnect() {
    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${this.USER_ID}/${this.CHAT_ID}/${this.TOKEN}`
    );
    this.init();
  }

  private init() {
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      this.PING_PONG_ID = setInterval(() => {
        this.socket.send(
          JSON.stringify({
            type: 'ping',
          })
        );
      }, 20000);

      this.getOld(0);
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
      if (this.PING_PONG_ID) {
        clearTimeout(this.PING_PONG_ID);
      }
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'pong') {
        return;
      }

      if (Array.isArray(data)) {
        this.handleMessagesAdd(data);
      }

      if (data.type === 'message') {
        this.SCROLL_TO_LAST = true;
        this.handleMessagesAdd([data, ...store.getState().chatMessages]);
        console.dir(document.querySelector('#beep'));
      }
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event);
    });
  }

  public text(message: string) {
    if (this.socket.readyState === 3) {
      this.reconnect();
    }

    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }

  public close() {
    if (this.socket.readyState !== 3) {
      this.socket.close(4200, 'закрыто текущим пользователем');
    }
  }

  public sendFile(file: File) {
    //Отправить POST запрос в ручку /resources для сохранения
    // файла как ресурса
    // на сервере и получить id созданного ресурса из ответа(см.swagger)
    this.socket.send(
      JSON.stringify({
        content: fileId,
        type: 'file',
      })
    );
  }

  public getOld(offset: number) {
    this.socket.send(
      JSON.stringify({
        content: offset,
        type: 'get old',
      })
    );
  }

  private handleMessagesAdd(messages: MSNChatMessage[]) {
    // TODO sort
    store.setState('chatMessages', messages);
    if (this.SCROLL_TO_LAST) {
      interfaceController.scrollMessagesToTheLatter();
      this.SCROLL_TO_LAST = false;
    }
  }
}