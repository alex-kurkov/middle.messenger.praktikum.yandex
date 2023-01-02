import { Block } from 'core';
import { store } from 'core';
import { StoreEvents } from 'core/Store';
import { isEqual } from 'utils/isEqual';

function connect(mapStateToProps: (state: MSNStore) => object) {
  return function <T extends typeof Block>(Component: T): typeof Component {
    // @ts-ignore
    return class extends Component<object> {
      constructor(props: any[]) {
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.UPDATED, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        });
      }
    } as typeof Component;
  };
}

export const withUser = connect((s) => ({ user: s.user }));
export const withInterface = connect((s) => ({ interface: s.interface }));
export const withChats = connect((s) => ({ chats: s.chats }));
export const withChatMessages = connect((s) => ({ chatMessages: s.chatMessages }));
