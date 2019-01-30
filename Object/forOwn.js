const forOwn = (obj, fn) =>
    Object.keys(obj)
    .forEach(key => fn(obj[key], key, obj));

// Examples
forOwn({
    foo: 'bar',
    a: 1
}, v => console.log(v)); // 'bar', 1

forOwn({
    foo: 'bar',
    a: 1
}, (val, key) => console.log(key + ': ' + val));