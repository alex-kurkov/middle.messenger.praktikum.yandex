/* eslint-disable @typescript-eslint/no-explicit-any */
import { merge } from "./merge";

type Indexed<T = any> = {
  [key in string]: T;
};

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== 'object') {
    return object;
  }
  if (object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, field) => {
    const newValue: Indexed = { [field]: acc };
    return newValue;
  }, value as any);
  return merge(object as Indexed, result);
}
