const splitLines = str => str.split(/\r?\n/);

// Examples
const res = splitLines('This\nis\r\na\nmultiline\nstring.\n'); // ['This', 'is', 'a', 'multiline', 'string.' , '']
console.log(res);