/**
 * 根据 fn 对数组 arr 分组，返回每一组中元素个数
 * 
 * Examples:
 * countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
 * countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
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
* 
* 注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
*/

const countBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]) // eg. ([6.1, 4.2, 6.3], Math.floor) => [6, 4, 6]
    .reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});


console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // {4: 1, 6: 2}
console.log(countBy(['one', 'two', 'three'], 'length')); // {3: 2, 5: 1}