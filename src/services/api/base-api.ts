export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export abstract class BaseAPI {
  create(): void {
    throw new Error('Not implemented');
  }

  request(): void {
    throw new Error('Not implemented');
  }

  update(): void {
    throw new Error('Not implemented');
  }

  delete(): void {
    throw new Error('Not implemented');
  }
}
