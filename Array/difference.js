const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(val => !s.has(val));
};

// Examples
const result = difference([1, 2, 3], [1, 2, 4]); // [3]
console.log(result);