const castArray = val => Array.isArray(val) ? val : [val];

// Examples
const res1 = castArray('foo'); // ['foo']
const res2 = castArray([1]); // [1]

console.log(res1, res2);