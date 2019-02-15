const dropRightWhile = (arr, func) => {
    while (arr.length && !func(arr[arr.length - 1]))
        arr = arr.slice(0, -1);

    return arr;
}

// Examples
const res = dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
console.log(res);