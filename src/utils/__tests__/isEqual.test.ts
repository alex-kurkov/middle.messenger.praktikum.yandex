import { isEqual } from "utils/isEqual";
import 'jest'

describe('utils/isEqual', () => {
  const testObject = { test: 'test' }
  const anotherObject = { test: 'test' }
  const aDifferentObject = { test: 'no-test' }
  
  it('objects should be equal after deep comparison', () => {
    expect(isEqual(testObject, anotherObject)).toBeTruthy();
  });

  it('objects with different values should not be equal after deep comparison', () => {
    expect(isEqual(testObject, aDifferentObject)).not.toBeTruthy();
  });

  it('empty objects should be equal', () => {
    expect(isEqual({}, {})).toBeTruthy();
  });
});
