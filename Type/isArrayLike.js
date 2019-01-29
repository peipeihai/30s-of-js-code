const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

// Examples
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false