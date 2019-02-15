const initializeArrayWithRange = (end, start = 0, step = 1) =>
    Array.from({
        length: Math.ceil((end - start + 1) / step)
    }, (v, i) => i * step + start);

// Examples
const res1 = initializeArrayWithRange(5); // [0,1,2,3,4,5]
const res2 = initializeArrayWithRange(7, 3); // [3,4,5,6,7]
const res3 = initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]

console.log(res1);
console.log(res2);
console.log(res3);