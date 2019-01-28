/**
 * 获取数组中每隔 n 个元素
 */

const everyNth = (arr, n) => arr.filter((val, index) => (index + 1) % n === 0);

console.log(everyNth([1, 2, 3, 4, 5, 6], 2)); // [ 2, 4, 6 ]