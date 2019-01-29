const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

// Examples
console.log(isPlainObject({ a: 1 })); // true
console.log(isPlainObject(new Map())); // false