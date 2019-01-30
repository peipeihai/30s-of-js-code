const mapString = (str, fn) =>
    str
    .split('')
    .map((char, index) => fn(char, index, str))
    .join('');


// Examples
const res = mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
console.log(res);