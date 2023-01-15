/* eslint-disable @typescript-eslint/no-explicit-any */

type Rejection = {
  type: 'xhr' | 'store' | 'logic';
  message: string;
};

export function withErrorHandle(
  _target: any,
  _propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> | void {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: any) {
    // eslint-disable-next-line prefer-rest-params
    originalMethod.apply(this, arguments)
      .then((res: any) => Promise.resolve(res))
      .catch((error: Rejection) => {
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

/* export function errorCatch(
  target,
  propertyKey,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> {
  const originalMethod = descriptor.value;

  // eslint-disable-next-line no-param-reassign
  descriptor.value = function fn(this: any) {
    // eslint-disable-next-line prefer-rest-params
    originalMethod.apply(this, arguments).catch((e: Error) => {
      // eslint-disable-next-line no-console
      console.error(e);
      Router.go(pathRoutes.internalServerError);
    });
  };
  return descriptor;
}
 */
