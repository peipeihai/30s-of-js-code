/**
 * 将数组 arr 按 size 个数分组
 * 
 * Example:
 * console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]])
 */

const chunk = (arr, size) => Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size),
);