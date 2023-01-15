/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */

type Rejection = {
  type: 'xhr' | 'store' | 'logic';
  message: string;
};

export function withPromisifiedErrorHandle(
  _target: any,
  _propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> | void {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: any) {
    return originalMethod.apply(this, arguments).catch((error: Rejection) => {
      const { type, message } = error;
      // TODO more complex logic and add error-notifications
      switch (type) {
        case 'xhr':
          console.error(
            `Не удалось получить данные с сервера. Сообщение сервера: ${message}`
          );
          break;
        case 'logic':
          console.error(message);
          break;
        case 'store':
          console.error(message);
          break;
        default:
          console.error(error);
      }
    });
  };
  return descriptor;
}
