/**
 * 截取数组 arr 的前 n 个元素
 * Examples:
 * drop([1, 2, 3]); // [2,3]
 * drop([1, 2, 3], 2); // [3]
 * drop([1, 2, 3], 42); // []
 */

const drop = (arr, n = 1) => arr.slice(n);