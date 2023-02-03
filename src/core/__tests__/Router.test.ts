import Router from 'core/Router';
import Block from 'core/Block';

describe('core/Router', () => {
  const router = new Router(':root');
  class mockPage1 extends Block<object> {
    static componentName = 'mockPage1';
    render() {
      return '<span>testPage 1</span>';
    }
  }
  class mockPage2 extends Block<object> {
    static componentName = 'mockPage2';
    render() {
      return '<div>testPage 2</div>';
    }
  }

  it('should be singleton', () => {
    const router2 = new Router('other-root');
    expect(router).toStrictEqual(router2);
  });

  it('should add routes', () => {
    router.use('/login1', mockPage1, { prop: 'test1' });
    router.use('/login2', mockPage2, { prop: 'test2', prop2: null });
    expect(router.routes.length).toStrictEqual(2);
  });

  it('should navigate b/w routes', () => {
    router.go('/login2');
    expect(router.currentPathname).toStrictEqual('/login2');
    router.go('/login1');
    expect(window.location.pathname).toStrictEqual('/login1');
  });

  it('should not go to unknown route', () => {
    router.go('/notexistant');
    expect(router.currentPathname).toStrictEqual('/login1');
    expect(window.location.pathname).toStrictEqual('/login1');
  });

});
