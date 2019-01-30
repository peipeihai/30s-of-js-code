const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// Examples
const res = capitalizeEveryWord('hello world, i love china!'); // 'Hello World!'
console.log(res);