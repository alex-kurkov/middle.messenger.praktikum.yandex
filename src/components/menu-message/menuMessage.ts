import Block from 'core/Block';
import './menuMessage.css';
import template from './menuMessage.hbs';
import { activeChatController } from 'controllers/active-chat-controller';
import { withActiveChatId } from 'services/class-decorators/store-connectors';
import { normalizeDate } from 'utils/normalizeDate';

@withActiveChatId
export class MenuMessage<
  P extends MSNChat & {
    last_message?: MSNChatMessage;
    activeChatId: Nullable<number>;
  }
> extends Block<P> {
  static componentName = 'MenuMessage';

  constructor(props: P) {
    super({
      ...props,
      abbr: props.title.charAt(0).toUpperCase(),
      time: normalizeDate(props.last_message?.time || ''),
      active: props.activeChatId == props.id,
      events: {
        click: () => {
          activeChatController.setActiveChat(props.id);
        },
      },
    });
  }
  render() {
    return template;
  }
}
