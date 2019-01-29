const omitBy = (obj, fn) => {
    return Object.keys(obj)
        .filter(key => !fn(obj[key], key))
        .reduce((acc, k) => {
            acc[k] = obj[k];
            return acc;
        }, {});
}

// Examples
const result = omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
console.log(result);