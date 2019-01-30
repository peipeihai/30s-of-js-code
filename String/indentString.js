const indentString = (str, count = 1, indent = '    ') => str.replace(/^/gm, indent.repeat(count));

// Examples
const res1 = indentString('Lorem\nIpsum'); // '  Lorem\n  Ipsum'
const res2 = indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'

console.log(res1);
console.log(res2);