import { Fetch } from 'core';

export const fetchAuth = new Fetch('ya-praktikum.tech/api/v2/auth', true);

export class authAPI {
  requestSignup(user: Omit<MSNUser, 'id' | 'avatar'>): Promise<XMLHttpRequest> {
    return fetchAuth.post('/signup', { data: user });
  }

  requestSignin(data: {
    login: string;
    password: string;
  }): Promise<XMLHttpRequest> {
    return fetchAuth.post('/signin', { data });
  }

  requestUserInfo(): Promise<XMLHttpRequest> {
    return fetchAuth.get('/user');
  }

  requestLogout(): Promise<XMLHttpRequest> {
    return fetchAuth.post('/logout');
  }
}
