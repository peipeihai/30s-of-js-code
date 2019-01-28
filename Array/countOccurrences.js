/**
 * 计算数组中某一个值出现的次数
 * 
 * Example:
 * 
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
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

//  const countOccurrences = (arr, val) => arr.filter( v => v === val).length;

const countOccurrences = (arr, val) => arr.reduce((acc, curVal) => curVal === val ? acc + 1 : acc, 0);

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));