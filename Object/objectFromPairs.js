const objectFromPairs = arr => {
    return arr.reduce((acc, [key, val]) => {
        acc[key] = val;
        return acc;
    }, {});
}

// Examples
const obj = objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
console.log(obj);