import Block from 'core/Block';
import './feed-title.css';
import template from 'bundle-text:./feed-title.hbs';
import { withActiveChat } from '../../services/class-decorators/store-connectors';
import { abbreviateChat } from 'utils/abbreviate';
import { interfaceController } from 'controllers/interface-controller';

@withActiveChat
export class FeedTitle<P extends { activeChat:{chat: MSNChat} }> extends Block<P> {
  static componentName = 'FeedTitle';
  
  constructor(props: P) {
    super({
      ...props,
      abbr: abbreviateChat(props.activeChat),
      editChat: () => {
        interfaceController.showEditChatDialog();
      }
    });
  }
  render() {
    return template;
  }
}
