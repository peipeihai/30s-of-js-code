const omit = (obj, keysArr) => {
    return Object.keys(obj).filter(key => !keysArr.includes(key))
        .reduce((acc, k) => {
            acc[k] = obj[k];
            return acc;
        }, {});
}

// Examples
const result = omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
console.log(result);