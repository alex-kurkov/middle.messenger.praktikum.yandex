import Block from 'core/Block';
import './chat-messages-list.css';
import template from 'bundle-text:./chat-messages-list.hbs';
import { withChatMessages } from '../../services/class-decorators/store-connectors';

// @ts-ignore
@withChatMessages
export class ChatMessagesList extends Block<object> {
  static componentName = 'ChatMessagesList';
  render() {
    return template;
  }
}
