/**
 * 去除数组中重复的元素，返回不重复的元素
 */

const filterNonUnique = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]