const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));

const minMax = over(Math.min, Math.max);
const res = minMax(1, 2, 3, 4, 5);
console.log(res);  // [1, 5]