import { Block } from 'core';
import { store } from 'core';
import { StoreEvents } from 'core/Store';
import { isEqual } from 'utils/isEqual';

export default function useWithSelector(
  mapStateToProps: (state: any) => any
) {
  return function (Component: typeof Block) {
    return class extends Component<object> {
      constructor(props: ConstructorParameters<typeof Block>) {
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
    };
  };
}
