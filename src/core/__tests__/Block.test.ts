import Block from 'core/Block';

describe('core/Block', () => {
  class TestComponent<P extends object> extends Block<object> {
    static componentName = 'TestComponent';
    constructor(props: P) {
      super({...props});
    }
    render() {
      return '<span>test</span>';
    }
  }
  const testComponent = new TestComponent({prop1: 'exists', prop2: undefined});

  it('should set props', () => {
    //@ts-ignore Ignore private props field of class Block
    expect(testComponent.props).toEqual({
      prop1: 'exists',
      prop2: undefined,
    });
  });

  it('should return own outerHTML', () => {
    expect(testComponent.getContent().outerHTML).toStrictEqual('<span>test</span>');
  });

  it('should hide and show in DOM', () => {
  
    testComponent.hide();
    expect(testComponent.getContent().style.display).toStrictEqual('none');

    testComponent.show();
    expect(testComponent.getContent().style.display).toStrictEqual('block');
  });

  it('should emit update event  on setting new props', () => {
  
    const mockFn = jest.fn();
    testComponent.eventBus.on(Block.EVENTS.FLOW_CDU, mockFn);
    testComponent.setProps({new: 'new'});

    expect(mockFn).toBeCalledTimes(1);

  });

});
