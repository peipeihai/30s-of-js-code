const getType = v =>
    v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// Examples
console.log(getType(new Set([1, 2, 3]))); // 'set'