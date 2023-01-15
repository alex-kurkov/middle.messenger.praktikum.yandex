import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';

export const fetchUser = new Fetch('https://ya-praktikum.tech/api/v2/user');

class UserAPI {
  @handleResponse
  createUser(user: Omit<MSNUser, 'id' | 'avatar'>): Promise<XMLHttpRequest> {
    return fetchUser.put('/profile', { data: user });
  }
  @handleResponse
  createAvatar(formData: FormData): Promise<XMLHttpRequest> {
    return fetchUser.put('/profile/avatar', { data: formData });
  }
  @handleResponse
  createPassword(
    oldPassword: string,
    newPassword: string
  ): Promise<XMLHttpRequest> {
    return fetchUser.put('/password', { data: { oldPassword, newPassword } });
  }
  @handleResponse
  requestUserById(id: number): Promise<XMLHttpRequest> {
    return fetchUser.get(`/${id}`);
  }
  @handleResponse
  requestUsersByLogin(login: string): Promise<XMLHttpRequest> {
    return fetchUser.post('/search', { data: { login } });
  }
}

export default new UserAPI();
