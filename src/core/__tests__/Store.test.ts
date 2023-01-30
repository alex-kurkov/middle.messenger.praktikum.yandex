import { Store } from '../Store';

describe('core/Store', () => {
  it('should set state', () => {
    const store = new Store({});

    store.setState('userId', 123);

    expect(store.state).toEqual({ userId: 123 });
  });
});
