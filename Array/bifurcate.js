/**
 * bifurcate: 分叉。
 * 根据条件将数组分为两个 group
 * 
 * Examples:
 * console.log(bifurcate(['a', 'b', 'c', 'd'], [true, false, false, true]));  // [ [ 'a', 'd' ], [ 'b', 'c' ] ]
 * console.log(bifurcate(['a', 'b', 'c', 'd'], [true, false, false, false]));  // [ [ 'a' ], [ 'b', 'c', 'd' ] ]
 */

const bifurcate = (arr, filters) =>
    arr.reduce(
        (acc, val, index) => (acc[filters[index] ? 0 : 1].push(val), acc), 
        [ [], [] ]
    );


