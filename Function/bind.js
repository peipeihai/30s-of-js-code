/**
 * 实现函数 bind
 * 
 * EXample:
 * 
 * function greet(greeting, punctuation) {
 *    return greeting + ' ' + this.user + punctuation;
 * }
 * const freddy = { user: 'fred' };
 * const freddyBound = bind(greet, freddy);
 * console.log(freddyBound('hi', '!')); // 'hi fred!'
 */

const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);