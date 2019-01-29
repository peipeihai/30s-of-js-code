const mapValues = (obj, fn) => {
    return Object.keys(obj).reduce((acc, k) => {
        acc[k] = fn(obj[k], k, obj);
        return acc;
    }, {});
}

// Examples
const users = {
    fred: {
        user: 'fred',
        age: 40
    },
    pebbles: {
        user: 'pebbles',
        age: 1
    }
};
const mappedUsers = mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
console.log(mappedUsers);