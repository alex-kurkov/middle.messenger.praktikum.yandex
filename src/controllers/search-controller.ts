import { store } from 'core';
import userApi from 'services/api/user-api';
import { withPromisifiedErrorHandle }
  from 'services/property-decorators/withPromisifiedErrorHandle';

class SearchController {
  @withPromisifiedErrorHandle
  public async searchUsersByLogin(login: string) {
    if (!login.length) {
      return Promise.reject({
        type: 'logic',
        message: 'пустое поле login',
      });
    }
    await userApi.requestUsersByLogin(login).then((xhr) => {
        const users = JSON.parse(xhr.response);
        store.setState('search.users',users);
        return Promise.resolve(users);
    });
  }

  public clearSearchUsers() {
    store.setState('search.users',[]);
  }
}

export const searchController = new SearchController();
