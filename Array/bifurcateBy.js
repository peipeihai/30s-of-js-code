/**
 * bifurcate: 分叉。
 * 根据条件 fn 将数组分为两个 group
 * 
 * Example:
 * console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));  // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
 */

/**
* 
* reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

* accumulator 累计器
* currentValue 当前值
* currentIndex 当前索引
* array 数组
*
* 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：
* 如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；
* 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。

* 注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
*/

const bifurcateBy = (arr, fn) => arr.reduce(
    (acc, val, index) => {
        acc[fn(val, index) ? 0 : 1].push(val);
        return acc;
    },
    [
        [],
        []
    ]
);