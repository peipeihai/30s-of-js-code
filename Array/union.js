const union = (a, b) => Array.from(new Set([...a, ...b]));

// Examples
const res = union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

console.log(res);