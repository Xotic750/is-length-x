import isLength from '../src/is-length-x';

describe('isLength', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isLength).toBe('function');
  });

  it('should return `true` for lengths', function() {
    expect.assertions(1);

    const values = [0, 3, Number.MAX_SAFE_INTEGER];

    const expected = values.map(function() {
      return true;
    });

    const actual = values.map(isLength);

    expect(actual).toStrictEqual(expected);
  });

  it('should return `false` for non-lengths', function() {
    expect.assertions(1);

    const values = [-1, '1', 1.1, Number.MAX_SAFE_INTEGER + 1, void 0, null, '', '1', false, true];

    const expected = values.map(function() {
      return false;
    });

    const actual = values.map(isLength);

    expect(actual).toStrictEqual(expected);
  });
});
