export abstract class BaseAPI {
  abstract create(): void;
  abstract request(): void;
  abstract update(): void;
  abstract delete(): void;

  // request() {
  //   throw new Error('Not implemented');
  // }

  // update() {
  //   throw new Error('Not implemented');
  // }

  // delete() {
  //   throw new Error('Not implemented');
  // }
}
