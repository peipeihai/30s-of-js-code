const sum = [1, 2, 3, 4, 5].reduce((acc, cur, idx, src) => {
    console.log(`${acc}, ${cur}, ${idx}, ${src}`);
    return acc + cur;
});

console.log(sum);

const sum2 = [1, 2, 3, 4, 5].reduce((acc, cur, idx, src) => {
    console.log(`${acc}, ${cur}, ${idx}, ${src}`);
    return acc + cur;
}, 0);
console.log(sum2);


Array.from({ length: 5 }, (val, index) => {
    console.log(val, index);
});