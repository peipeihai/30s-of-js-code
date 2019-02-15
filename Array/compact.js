/**
 * 从数组中移除`假值`
 */

const compact = arr => arr.filter(Boolean);

// Examples
const result = compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
console.log(result);