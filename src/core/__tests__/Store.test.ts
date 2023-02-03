import { Store, StoreEvents } from '../Store';

describe('core/Store', () => {
  it('should set state', () => {
    const store = new Store({});

    store.setState('userId', 123);

    expect(store.state).toStrictEqual({ userId: 123 });
  });
  it('should emit Store.Updated event on update', () => {
    const store = new Store({});
    const mockFn = jest.fn();

    store.on(StoreEvents.UPDATED, mockFn);
    store.setState('testKey', 'testValue');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
