import Block from 'core/Block';
import template from 'bundle-text:./users-editable-list.hbs';
import './users-editable-list.css';
import { activeChatController } from 'controllers/active-chat-controller';

export class UsersEditableList<
  P extends { type: 'currentUsers' | 'search' }
> extends Block<P> {
  static componentName = 'UsersEditableList';

  constructor(props: P) {
  
    const onClick =
      props.type === 'currentUsers'
        ? (e: PointerEvent) => {
            const curTarget = e.currentTarget as HTMLElement;
            const id = curTarget?.querySelector('article')?.id;
            if (!id) {
              return;
            }
            activeChatController.deleteChatUsers(Number(id));
          }
        : (e: PointerEvent) => {
            const curTarget = e.currentTarget as HTMLElement;
            const id = curTarget?.querySelector('article')?.id;
            if (!id) {
              return;
            }
            activeChatController.addChatUsers(Number(id));
          };

    super({
      ...props,
      onClick,
    });
  }

  protected render(): string {
    return template;
  }
}
