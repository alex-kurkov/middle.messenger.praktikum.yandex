import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';
import { BASE_URL } from './base-api';

export const fetchUser = new Fetch(`${BASE_URL}/user`);

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
