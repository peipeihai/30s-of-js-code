const partition = (arr, fn) =>
    arr.reduce(
        (acc, val, index, arr) => {
            acc[fn(val, index, arr) ? 0 : 1].push(val);
            return acc;
        },
        [[], []]
    );

// Examples
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
const res = partition(users, o => o.active); // [[{ 'user': 'fred', 'age': 40, 'active': true }],[{ 'user': 'barney', 'age': 36, 'active': false }]]

console.log(res);