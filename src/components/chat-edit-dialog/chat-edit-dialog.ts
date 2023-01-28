import Block from 'core/Block';
import './chat-edit-dialog.css';
import template from './chat-edit-dialog.hbs';
import {
  withActiveChat,
  withChats,
  withEditChatDialog,
} from 'services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';
import { activeChatController } from 'controllers/active-chat-controller';

@withActiveChat
@withChats
@withEditChatDialog
// eslint-disable-next-line max-len
export class ChatEditDialog<P extends { chat: MSNChat }> extends Block<P> {
  static componentName = 'ChatEditDialog';
  constructor(props: P) {
    super({
      ...props,
      closeDialog: () => {
        interfaceController.hideEditChatDialog();
      },
      handleChatDelete: () => {
        activeChatController.deleteActiveChat();
      },
    });
  }
  render() {
    return template;
  }
}
