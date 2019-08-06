<a
  href="https://travis-ci.org/Xotic750/is-length-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-length-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-length-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-length-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-length-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-length-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-length-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-length-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-length-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-length-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-length-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-length-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-length-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-length-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-length-x"></a>

## is-length-x

Checks if `value` is a valid array-like length.

<a name="exp_module_is-length-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

This method checks if `value` is a valid array-like length.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is a valid length, else `false`.

| Param | Type            | Description         |
| ----- | --------------- | ------------------- |
| value | <code>\*</code> | The value to check. |

**Example**

```js
import isLength from 'is-length-x';

console.log(isLength(3)); // => true
console.log(isLength(Number.MIN_VALUE)); // => false
console.log(isLength(Infinity)); // => false
console.log(isLength('3')); // => false
```
