const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

// Examples
const res = initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]

console.log(res);