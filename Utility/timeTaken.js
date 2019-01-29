const timeTaken = callback => {
    console.time('timeTaken');
    const r = callback();
    console.timeEnd('timeTaken');
    return r;
};


timeTaken(() => Math.pow(2, 10));