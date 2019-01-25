/**
 * 将一组函数组合起来，自左至右执行
 */

const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
console.log(addAndSquare(1, 2)); // 9