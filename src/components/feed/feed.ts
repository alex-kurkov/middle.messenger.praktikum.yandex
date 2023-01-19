import Block from 'core/Block';
import './feed.css';
import template from 'bundle-text:./feed.hbs';
import { withActiveChat } from 'services/class-decorators/store-connectors';
import { interfaceController } from 'controllers/interface-controller';

@withActiveChat
export class Feed<
  P extends { handleNewChatClick?: () => void }
> extends Block<P> {
  static componentName = 'Feed';

  constructor(props: P) {
    super({
      ...props,
      handleNewChatClick: () => {
        interfaceController.showAddChatDialog();
      },
    });
  }

  render() {
    return template;
  }
}
