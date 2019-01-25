/**
 * 判断数组中每个元素是否都相等
 * 
 * Examples:
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */

const allEqual = arr => arr.every(val => val === arr[0]);