import { Fetch } from 'core';
import { handleResponse } from 'services/property-decorators/handleResponse';

export const fetchAuth = new Fetch(
  'https://ya-praktikum.tech/api/v2/auth',
);

class AuthAPI {
  @handleResponse
  requestSignup(user: Omit<MSNUser, 'id' | 'avatar'>): Promise<XMLHttpRequest> {
    return fetchAuth.post('/signup', { data: user });
  }

  @handleResponse
  requestSignin(data: {
    login: string;
    password: string;
  }): Promise<XMLHttpRequest> {
    return fetchAuth.post('/signin', { data });
  }

  @handleResponse
  requestUserInfo(): Promise<XMLHttpRequest> {
    return fetchAuth.get('/user');
  }
  
  @handleResponse
  requestLogout(): Promise<XMLHttpRequest> {
    return fetchAuth.post('/logout');
  }
}

export default new AuthAPI();
