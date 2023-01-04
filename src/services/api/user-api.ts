import { Fetch } from 'core';

export const fetchUser = new Fetch('https://ya-praktikum.tech/api/v2/user');

class UserAPI {
  createUser(user: Omit<MSNUser, 'id' | 'avatar'>): Promise<XMLHttpRequest> {
    return fetchUser.put('/profile', { data: user });
  }

  createAvatar(formData: FormData): Promise<XMLHttpRequest> {
    return fetchUser.put('/profile/avatar', { data: formData });
  }
  createPassword(
    oldPassword: string,
    newPassword: string
  ): Promise<XMLHttpRequest> {
    return fetchUser.put('/password', { data: { oldPassword, newPassword } });
  }
  requestUserById(id: number): Promise<XMLHttpRequest> {
    return fetchUser.get(`/${id}`);
  }
  requestUsersByLogin(login: string): Promise<XMLHttpRequest> {
    return fetchUser.post('/search', { data: { login } });
  }
}

export default new UserAPI()
