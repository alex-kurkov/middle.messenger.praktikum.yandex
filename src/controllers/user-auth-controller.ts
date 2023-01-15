import { store } from 'core';
import { authApi } from 'services/api';
import { getStaticFilePath } from 'utils/getStaticFilePath';
import { chatCommonController } from './chat-common-controller';
import router from './router';

class UserAuthController {
  public async auth(pathname = '/messenger') {
    // TODO loader start
    await authApi.requestUserInfo().then((xhr) => {
      if (xhr.status === 200) {
        const user = JSON.parse(xhr.response);
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
      }
    });
  }

  public async logout() {
    // TODO loader start
    await authApi.requestLogout().then(() => {
      router.go('/login');
      store.setState('user', null);
    });
  }
}

export const userAuthController = new UserAuthController();
