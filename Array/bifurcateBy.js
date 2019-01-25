/**
 * bifurcate: 分叉。
 * 根据条件 fn 将数组分为两个 group
 * 
 * Example:
 * console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));  // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
 */

const bifurcateBy = (arr, fn) => arr.reduce(
    (acc, val, index) => (acc[fn(val, index) ? 0 : 1].push(val), acc),
    [[], []]
);


