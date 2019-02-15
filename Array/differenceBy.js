const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(val => !s.has(fn(val)));
}

// Examples
const res1 = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
const res2 = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
console.log(res1);
console.log(res2);