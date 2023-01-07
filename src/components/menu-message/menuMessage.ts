import Block from 'core/Block';
import './menuMessage.css';
import template from 'bundle-text:./menuMessage.hbs';
import { activeChatController } from 'controllers/active-chat-controller';
import { withActiveChat } from 'services/class-decorators/store-connectors';

@withActiveChat
export class MenuMessage<P extends MSNChat & {chat: MSNChat}> extends Block<P> {
  static componentName = 'MenuMessage';

  constructor(props: P) {
    super({
      ...props,
      abbr: props.title.charAt(0).toUpperCase(),
      active: props.chat?.id === props.id,
      events: {
        click: () => {
          console.log(this)
          activeChatController.setActiveChat(props.id);
        }
      }
    })
  }
  render() {
    return template;
  }
}
