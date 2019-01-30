const byteSize = str => new Blob([str]).size;

// Examples(nodejs环境中没有Blob对象，在浏览器控制台中运行测试)
const res1 = byteSize('😀'); // 4
const res2 = byteSize('Hello World'); // 11
const res3 = byteSize('我爱中国'); // 12
console.log(res1, res2, res3);