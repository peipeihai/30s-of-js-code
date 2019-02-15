const ary = (fn, n) => (...args) => fn(...args.slice(0, n));

// Examples
const firstTwoMax = ary(Math.max, 2);
const res = [[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]
const res2 = firstTwoMax(10, 20, 30, 40); // 20
console.log(res);
console.log(res2);