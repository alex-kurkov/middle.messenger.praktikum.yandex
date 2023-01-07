import Block from 'core/Block';
import './chat-avatar-edit.css';
import template from 'bundle-text:./chat-avatar-edit.hbs';
import { activeChatController } from 'controllers/active-chat-controller';

export class ChatAvatarEdit<P extends { chat: MSNChat }> extends Block<P> {
  static componentName = 'ChatAvatarEdit';
  constructor(props: P) {
    super({
      ...props,

      handleAvatarChange: (e: Event) => {
        activeChatController.setActiveChatAvatar(props.chat?.id, e);
      },
    });
  }

  render() {
    return template;
  }
}
