import { store } from 'core';
import { authApi } from 'services/api';
import { getStaticFilePath } from 'utils/getStaticFilePath';
import { chatCommonController } from './chat-common-controller';
import router from './router';

class UserAuthController {
  // @handleError(handler)
  public async auth(pathname = '/messenger') {
    // TODO loader start
    await authApi.requestUserInfo().then((xhr) => {
      if (xhr.status === 200) {
        const user = JSON.parse(xhr.response);
        window.localStorage.setItem('isLoggedIn', 'true');
        store.setState('user', {
          ...user,
          avatar: getStaticFilePath(user.avatar)
        });
        chatCommonController.getChats();
        
        if (pathname === '/login' || pathname === '/register') {
          router.go('/messenger');
        } else {
          router.go(pathname);
        }
        return Promise.resolve();
      } else {
        router.go('/login');
        throw new Error(xhr.response);
      }
    });
  }

  public async logout() {
    // TODO loader start
    await authApi.requestLogout().then((xhr) => {
      if (xhr.status === 200) {
        window.localStorage.removeItem('isLoggedIn');
        router.go('/login');
        store.setState('user', null);
        return;
      } else {
        throw new Error(xhr.response);
      }
    });
  }
}

export const userAuthController = new UserAuthController();
