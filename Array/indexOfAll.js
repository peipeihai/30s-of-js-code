const indexOfAll = (arr, val) =>
    arr.reduce(
        (acc, el, index) => el === val ? [...acc, index] : acc,
        []
    );

// Examples
const res1 = indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
const res2 = indexOfAll([1, 2, 3], 4); // []

console.log(res1);
console.log(res2);