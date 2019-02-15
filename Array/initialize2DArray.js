const initialize2DArray = (w, h, val = null) =>
    Array.from({ length: h }).map(
        () => Array.from({ length: w }).fill(val)
    );

// Examples
// [ [ 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1 ] ]
const res = initialize2DArray(5, 4, 1);

console.log(res);