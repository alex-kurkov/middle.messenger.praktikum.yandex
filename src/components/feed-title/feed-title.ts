import Block from 'core/Block';
import './feed-title.css';
import template from './feed-title.hbs';
import { withActiveChat } from '../../services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';

@withActiveChat
export class FeedTitle<P extends { chat: MSNChat }> extends Block<P> {
  static componentName = 'FeedTitle';
  
  constructor(props: P) {
    super({
      ...props,
      abbr: props.chat.title?.charAt(0).toUpperCase(),
      editChat: () => {
        interfaceController.showEditChatDialog();
      },
    });
  }
  render() {
    return template;
  }
}
