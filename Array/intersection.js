const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(val => s.has(val));
}

// Examples
const res = intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

console.log(res);