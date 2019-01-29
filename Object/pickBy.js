const pickBy = (obj, fn) => {
    return Object.keys(obj)
        .filter(key => fn(obj[key], key))
        .reduce((acc, k) => {
            acc[k] = obj[k];
            return acc;
        }, {});
}

const result = pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
console.log(result);