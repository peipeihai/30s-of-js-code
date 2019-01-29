const objectToPairs = obj => Object.keys(obj).map(key => ([key, obj[key]]));

//Examples 
const pairs = objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
console.log(pairs);