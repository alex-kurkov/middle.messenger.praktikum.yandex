export function isEqual(l: string | object, r: string | object): boolean {
  if (typeof l !== typeof r) {
    throw new Error('types of compared parameters should be equal')
  }
  if (typeof r === 'string') {
    return l === r;
  }
  return false;
}
