const promisify = fn => (...args) =>
    new Promise((resolve, reject) =>
        fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );

const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi'));