import Block from 'core/Block';
import template from 'bundle-text:./feedMessage.hbs';
import './feedMessage.css';
import {
  withActiveChatUsers,
  withOwnId,
} from 'services/class-decorators/store-connectors';
import { normalizeDate } from 'utils/normalizeDate';

@withOwnId
@withActiveChatUsers
export class FeedMessage<
  P extends {
    message: MSNChatMessage;
    ownId: number;
    isFile: boolean;
    users: MSNUser[];
    user: MSNUser;
    time: string
  }
> extends Block<P> {
  static componentName = 'FeedMessage';
  constructor(props: P) {
    const { users, message } = props;
    const messageUser =
      users.find((user) => user?.id === message.user_id) || {
        first_name: 'Удаленный',
        second_name: 'пользователь',
        login: '',
        email: '',
        phone: '',
        id: message.user_id,
        avatar: null,
      }


    super({
      ...props,
      isFile: !!message.file,
      isOwn: props.ownId === message.user_id,
      user: messageUser,
      time: normalizeDate(message.time),
    });
  }

  render() {
    return template;
  }
}
