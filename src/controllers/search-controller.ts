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
      try {
        const users = JSON.parse(xhr.response);
        store.setState('search.users', users);
        return Promise.resolve(users);
      } catch (error) {
        return Promise.reject({
          message: 'НЕвозможно распарсить json c users',
          type: 'logic',
        });
      }
    });
  }

  @withPromisifiedErrorHandle
  public async searchUsersById(id: number) {
    await userApi.requestUserById(id).then((xhr) => {
      try {
        const user = JSON.parse(xhr.response);
        if (!user) {
          return Promise.reject({
            type: 'xhr',
            message: `не найден пользователь с id ${id}`,
          });
        }
        store.setState('activeChatUsers', [
          ...store.state.activeChatUsers,
          user,
        ]);
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject({
          message: 'НЕвозможно распарсить json',
          type: 'logic',
        });
      }
    });
  }

  public clearSearchUsers() {
    store.setState('search.users', []);
  }
}

export const searchController = new SearchController();
