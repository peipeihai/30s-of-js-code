const invertKeyValues = (obj, fn) =>
    Object.keys(obj)
    .reduce((acc, key) => {
        const val = (fn && typeof fn === 'function') ? fn(obj[key]) : obj[key];
        acc[val] = acc[val] || [];
        acc[val].push(key);
        return acc;
    }, {});


// Examples
const res1 = invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
const res2 = invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ]

console.log(res1);
console.log(res2);