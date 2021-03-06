const findLastKey = (obj, fn) =>
    Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));

// Examples
const res = findLastKey({
        barney: {
            age: 36,
            active: true
        },
        fred: {
            age: 40,
            active: false
        },
        pebbles: {
            age: 1,
            active: true
        }
    },
    o => o['active']
); // 'pebbles'

console.log(res);