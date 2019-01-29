const pick = (obj, arr) => {
    return Object.keys(obj)
        .filter(key => arr.includes(key))
        .reduce((acc, k) => {
            acc[k] = obj[k];
            return acc;
        }, {});
};

// Examples
const result = pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
console.log(result);