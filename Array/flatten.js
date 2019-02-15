/**
 * 按指定层级扁平化展开数组
 */

const flatten = (arr, depth = 1) =>
    arr.reduce((acc, val) => {
        return acc.concat(depth > 1 && Array.isArray(val) ? flatten(val, depth - 1) : val);
    }, []);

// Examples
const res1 = flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
const res2 = flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
const res3 = flatten([1, [2, [3, [4, 5], 6], 7], 8], 3); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

console.log(res1);
console.log(res2);
console.log(res3);