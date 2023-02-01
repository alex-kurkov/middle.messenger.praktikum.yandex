import EventBus from 'core/EventBus';

describe('core/EventBus', () => {
  const eventBus = new EventBus();
  const mockFn = jest.fn();
  const mockFn2 = jest.fn();

  it('should register & call listeners', () => {
    eventBus.on('testEvent', mockFn);
    eventBus.on('testEvent', mockFn2);

    eventBus.emit('testEvent');
    eventBus.emit('testEvent');

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn2).toHaveBeenCalled();
  });

  it('should unregister listener', () => {
    eventBus.off('testEvent', mockFn);

    eventBus.emit('testEvent');

    expect(mockFn).not.toHaveBeenCalledTimes(3);
  });

  it('should now have only 1 registered listener of "testEvent"', () => {
    //@ts-ignore - Ignore getting private class field "listeners"
    expect(eventBus.listeners['testEvent'].length).toBe(1);
  });
});
