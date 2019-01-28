/**
 * 将数组扁平化展开
 * 
 * Examples:
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */

// const deepFlatten = arr => {
//     var res = [];
//     for (let el of arr) {
//         if (Array.isArray(el)) {
//             res = res.concat(deepFlatten(el));
//         } else {
//             res.push(el);
//         }
//     }
//     return res;
// };

const deepFlatten = arr => [].concat(...arr.map(item => Array.isArray(item) ? deepFlatten(item) : item));

console.log(deepFlatten([1, 2, 3, [4, [5, 6, [7, [8, [9, 10]]]]]]));