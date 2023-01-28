import Block from 'core/Block';
import './chat-messages-list.css';
import template from './chat-messages-list.hbs';
import {
  withChatMessages,
  withMoreMessagesAvailable,
} from '../../services/class-decorators/store-connectors';
import { store } from 'core';

@withChatMessages
@withMoreMessagesAvailable
export class ChatMessagesList<
  P extends { moreMessagesAvailable: boolean; chatMessages: MSNChatMessage[] }
> extends Block<P> {
  static componentName = 'ChatMessagesList';

  constructor(props: P) {
    super({
      ...props,
      onLoadMore: () => {
        const messenger = store.state.socket;
        messenger?.loadMoreMessages();
      },
    });
  }

  render() {
    return template;
  }
}
