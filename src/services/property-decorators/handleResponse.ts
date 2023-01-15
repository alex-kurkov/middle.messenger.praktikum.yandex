/* eslint-disable @typescript-eslint/no-explicit-any */

export function handleResponse(
  _target: any,
  _propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> | void {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: any) {
    // eslint-disable-next-line prefer-rest-params
    return originalMethod.apply(this, arguments).then((xhr: XMLHttpRequest) => {
      if (xhr.status === 200) {
        return Promise.resolve(xhr);
      }
      return Promise.reject({ type: 'xhr', message: xhr.response });
    })
  };
  return descriptor;
}
