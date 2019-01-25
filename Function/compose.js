/**
 * 将一组函数组合起来，自右至左执行
 * 
 * Example:
 * 
 * const add5 = x => x + 5;
 * const multiply = (x, y) => x * y;
 * const multiplyAndAdd5 = compose(
 *   add5,
 *   multiply
 * );
 * console.log(multiplyAndAdd5(5, 2)); // 15
 * 
 */

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

