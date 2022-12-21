export interface RequestOptions {
  timeout?: number;
  data?: object;
  headers?: Record<string, string>;
}
enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum REJECT_MESSAGES {
  NO_METHOD = 'не передан метод',
  NO_URL = 'не передан метод',
  DATA_NO_OBJECT = 'поле data должно быть объектом',
  REQUEST_ABORTED = 'запрос отменен',
  REQUEST_TIMEOUTED = 'запрос превысил таймаут',
  REQUEST_ERROR = 'запрос упал с ошибкой',
}

export default class Fetch {
  get = (url: string | URL, options: RequestOptions = {}) => {
    if (options?.data) {
      // eslint-disable-next-line no-param-reassign
      url = this.addQueries(options.data, url);
    }
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  post = (url: string | URL, options: RequestOptions = {}) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = (url: string | URL, options: RequestOptions = {}) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete = (url: string | URL, options: RequestOptions = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (
    url: string | URL,
    options: RequestOptions & { method: string },
    timeout = 5000,
  ): Promise<XMLHttpRequest> => {
    const { method, headers = {}, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(REJECT_MESSAGES.NO_METHOD);
        return;
      }
      if (!url) {
        reject(REJECT_MESSAGES.NO_URL);
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      if (headers) {
        this.setHeaders(xhr, headers);
      }

      xhr.onload = () => resolve(xhr);

      xhr.onabort = () => reject(new Error(REJECT_MESSAGES.REQUEST_ABORTED));
      xhr.onerror = () => reject(new Error(REJECT_MESSAGES.REQUEST_ERROR));

      xhr.timeout = timeout;
      xhr.ontimeout = () =>
        reject(new Error(REJECT_MESSAGES.REQUEST_TIMEOUTED));

      xhr.onprogress = () => {
        console.log('progress...');
      };

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as Document);
      }
    });
  };

  private setHeaders(
    xhr: XMLHttpRequest,
    headers: Record<string, string>,
  ): void {
    Object.keys(headers).forEach((name) => {
      xhr.setRequestHeader(name, headers[name]);
    });
  }

  private addQueries(data = {}, url: string | URL): string | URL {
    if (typeof data !== 'object') {
      throw new Error(REJECT_MESSAGES.DATA_NO_OBJECT);
    }

    const dataEntries = Object.entries(data);
    if (!dataEntries || !dataEntries.length) {
      return '';
    }

    if (typeof url === 'string') {
      const queries = dataEntries.map(
        ([key, value]): string => `${key}=${value.toString()}`,
      );
      return `${url}?${queries.join('&')}`;
    }
    dataEntries.forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
    return url;
  }
}
