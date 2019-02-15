const longestItem = (...values) =>
    values.reduce((acc, val) => val.length > acc.length ? val : acc);


// Examples
const res1 = longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
const res2 = longestItem(...['a', 'ab', 'abc']); // 'abc'
const res3 = longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
const res4 = longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
const res5 = longestItem([1, 2, 3], 'foobar'); // 'foobar'

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);