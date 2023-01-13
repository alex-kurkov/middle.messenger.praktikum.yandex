import Block from 'core/Block';
import template from 'bundle-text:./feedMessage.hbs';
import './feedMessage.css';
import {
  withActiveChatUsers,
  withOwnId,
  withUser,
} from 'services/class-decorators/store-connectors';

@withOwnId
  @withActiveChatUsers
  @withUser
export class FeedMessage<
  P extends {
    message: MSNChatMessage;
    ownId: number;
    isFile: boolean;
    users: MSNUser[];
    user: MSNUser;
  }
> extends Block<P> {
  static componentName = 'FeedMessage';
  constructor(props: P) {
    const { users, message } = props;
    const messageUser = users.find(
      (user) => user?.id === message.user_id
    );

    super({
      ...props,
      isFile: !!message.file,
      isOwn: props.ownId === message.user_id,
      user: messageUser,
    });
  }

  render() {
    return template;
  }
}
