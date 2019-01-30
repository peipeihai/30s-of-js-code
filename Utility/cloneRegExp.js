const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);

// Examples
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi

console.log(regExp2);