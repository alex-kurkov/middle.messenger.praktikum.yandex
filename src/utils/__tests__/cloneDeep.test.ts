import { cloneDeep } from 'utils/cloneDeep';
import 'jest';

describe('utils/isEqual', () => {
  const testObject = {
    test: {
      deep: 'test',
      arr: [
        null,
        0,
        'df',
        () => {
          return;
        },
      ],
    },
  };
  const cloned = cloneDeep(testObject);

  it('objects should be different entities', () => {
    expect(testObject === cloned).toBeFalsy();
  });

  it('objects should be equal after deep comparison', () => {
    expect(testObject).toStrictEqual(cloned);
  });
});
