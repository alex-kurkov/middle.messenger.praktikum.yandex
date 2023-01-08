import { store } from 'core';
import userApi from 'services/api/user-api';

class SearchController {
  // @handleError(handler)
  public async searchUsersByLogin(login: string) {
    if (!login.length) {
      throw new Error('empty login string');
    }
    // TODO cache search results
    await userApi.requestUsersByLogin(login).then((xhr) => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log('FOUND USERS', users);
        const search = store.getState().search
        store.setState('search', { ...search, users });
        return Promise.resolve(users);
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public clearSearchUsers() {
    const search = store.getState().search
    store.setState('search', { ...search, users: [] });
  }
}

export const searchController = new SearchController();
