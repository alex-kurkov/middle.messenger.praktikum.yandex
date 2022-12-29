import { Fetch } from 'core';

export const fetchUser = new Fetch('ya-praktikum.tech/api/v2/user', true);

export class userAPI {
  createUser(user: Omit<MSNUser, 'id' | 'avatar'>): Promise<XMLHttpRequest> {
    return fetchUser.put('/profile', { data: user });
  }

  // e: InputEvent
  // const image = e.target.files[0] - first file(input без multiple) | e.target.value
  // const formData = new FormData();
  // formData.set(`avatar`, image, image.name);

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
