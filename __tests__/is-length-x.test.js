let isLength;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isLength = require('../../index.js');
} else {
  isLength = returnExports;
}

describe('isLength', function() {
  it('is a function', function() {
    expect(typeof isLength).toBe('function');
  });

  it('should return `true` for lengths', function() {
    const values = [0, 3, Number.MAX_SAFE_INTEGER];

    const expected = values.map(function() {
      return true;
    });

    const actual = values.map(isLength);

    expect(actual).toStrictEqual(expected);
  });

  it('should return `false` for non-lengths', function() {
    const values = [-1, '1', 1.1, Number.MAX_SAFE_INTEGER + 1, void 0, null, '', '1', false, true];

    const expected = values.map(function() {
      return false;
    });

    const actual = values.map(isLength);

    expect(actual).toStrictEqual(expected);
  });
});
