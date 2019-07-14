import isSafeInteger from 'is-safe-integer-x';
/**
 * This method checks if `value` is a valid array-like length.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */

export default function isLength(value) {
  return isSafeInteger(value) && value >= 0;
}

//# sourceMappingURL=is-length-x.esm.js.map