/* eslint-disable @typescript-eslint/no-explicit-any */
type PlainObject<T = any> = {
  [k in string]: T;
};

export function cloneDeep(entity: any): any {
  if (entity === null) {
    return entity;
  }
  if (typeof entity === 'function') {
    return entity;
  }
  if (typeof entity !== 'object') {
    return entity;
  }

  if (Array.isArray(entity)) {
    const res: any[] = [];
    entity.forEach((value) => res.push(cloneDeep(value)));
    return res;
  } else {
    const res: PlainObject = {};
    Object.keys(entity).forEach((key) => {
      res[key] = cloneDeep(entity[key]);
    });
    return res;
  }
}
