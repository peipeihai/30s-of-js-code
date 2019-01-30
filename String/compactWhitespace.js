const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');

// Examples
const res1 = compactWhitespace('hello    world'); // 'hello world'
const res2 = compactWhitespace('I love  \n  China'); // 'I love China'

console.log(res1, res2);