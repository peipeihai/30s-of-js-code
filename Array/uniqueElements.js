// const uniqueElements = arr => Array.from(new Set(arr));
const uniqueElements = arr => [...new Set(arr)];

// Examples
const res = uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

console.log(res);