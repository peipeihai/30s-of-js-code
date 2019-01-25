/**
 * 深拷贝一个对象
 * 
 * Example:
 * 
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = deepClone(a); // a !== b, a.obj !== b.obj
 */

const deepClone = obj => {
    let clone = Object.assign({}, obj);

    Object.keys(clone).forEach(key => {
        clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    });

    return Array.isArray(obj) && obj.length ?
        (clone.length = obj.length) && Array.from(clone) :
        Array.isArray(obj) ?
        Array.from(obj) :
        clone;
}