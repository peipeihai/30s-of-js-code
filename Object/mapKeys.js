const mapKeys = (obj, fn) =>
    Object.keys(obj).reduce((acc, k) => {
        acc[fn(obj[k], k, obj)] = obj[k];
        return acc;
    }, {});

// Example
const newObj = mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
console.log(newObj);