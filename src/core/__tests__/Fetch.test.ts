import Fetch from 'core/Fetch';
import { BASE_URL } from 'services/api/base-api';

const fetch = new Fetch(BASE_URL);

describe('core/Fetch', () => {
  it('GET request responds successfully', async () => {
    await fetch.get('/user').then((xhr) => {
      expect(xhr.status).toEqual(200);
    });
  });
  
  it('GET request sets Search params correctly = check stringify fn', async () => {
    await fetch.get('/user', { data: { test: 'foo' } }).then((xhr) => {
      expect(JSON.parse(xhr.response).searchParamsWere).toEqual('?test=foo');
    });
  });

  it('sets METHOD correctly', async () => {
    await fetch.post('/logout').then(xhr => { 
      const response = JSON.parse(xhr.response);
      expect(response.method).toEqual('POST');
   })
  });

  it('POST request is sent with credentials in CORS mode', async () => {
    await fetch.post('/logout').then((xhr) => {
      const response = JSON.parse(xhr.response);
      expect(response.mode).toEqual('cors');
      expect(response.credentials).toEqual('include');
    });
  });
  
});
