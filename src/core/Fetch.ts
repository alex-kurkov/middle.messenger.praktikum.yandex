export interface RequestOptions {
  timeout?: number;
  data?: unknown;
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
  NO_URL = 'не передан URL',
  DATA_NO_OBJECT = 'поле data должно быть объектом',
  REQUEST_ABORTED = 'запрос отменен',
  REQUEST_TIMEOUTED = 'запрос превысил таймаут',
  REQUEST_ERROR = 'запрос упал с ошибкой',
}

export default class Fetch {
  protected readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get = (url: string, options: RequestOptions = {}) => {
    if (options?.data) {
      // eslint-disable-next-line no-param-reassign
      url = this.addQueries(options.data, url);
    }
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post = (url: string, options: RequestOptions = {}) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = (url: string, options: RequestOptions = {}) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete = (url: string, options: RequestOptions = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (
    url: string,
    options: RequestOptions & { method: string },
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { method, headers = {}, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(REJECT_MESSAGES.NO_METHOD);
        return;
      }
      if (typeof url !== 'string') {
        reject(REJECT_MESSAGES.NO_URL);
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open(method, `${this.baseUrl}${url}`);
      xhr.withCredentials = true;
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
        console.log('XMLHttpRequest in progress...');
      };

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };

  private setHeaders(
    xhr: XMLHttpRequest,
    headers: Record<string, string>
  ): void {
    Object.keys(headers).forEach((name) => {
      xhr.setRequestHeader(name, headers[name]);
    });
    xhr.setRequestHeader('accept', 'application/json');
  }

  private addQueries(data = {}, url: string): string {
    if (typeof data !== 'object') {
      throw new Error(REJECT_MESSAGES.DATA_NO_OBJECT);
    }

    const dataEntries = Object.entries(data);
    if (!dataEntries || !dataEntries.length) {
      return '';
    }

    const queries = dataEntries.map(
      ([key, value]): string => `${key}=${value.toString()}`
    );
    return `${url}?${queries.join('&')}`;
  }
}
