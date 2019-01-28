/**
 * 截取数组 arr 的后 n 个元素
 * Examples:
 * dropRight([1, 2, 3]); // [1,2]
 * dropRight([1, 2, 3], 2); // [1]
 * dropRight([1, 2, 3], 42); // []
 */

const dropRight = (arr, n = 1) => arr.slice(0, -n);

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 40));