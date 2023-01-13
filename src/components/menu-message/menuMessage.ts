import Block from 'core/Block';
import './menuMessage.css';
import template from 'bundle-text:./menuMessage.hbs';
import { activeChatController } from 'controllers/active-chat-controller';
import {
  withActiveChatId,
} from 'services/class-decorators/store-connectors';

@withActiveChatId
export class MenuMessage<P extends MSNChat & {activeChatId: Nullable<number>}> extends Block<P> {
  static componentName = 'MenuMessage';

  constructor(props: P) {

    super({
      ...props,
      abbr: props.title.charAt(0).toUpperCase(),
      active: props.activeChatId == props.id,
      events: {
        click: () => {
          activeChatController.setActiveChat(props.id);
        },
      },
    });
    console.log(this)
  }
  render() {
    return template;
  }
}
