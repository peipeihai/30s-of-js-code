const dig = (obj, target) => {
    if (target in obj) {
        return obj[target];
    }

    return Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) {
            return acc;
        }
        if (typeof val === 'object') {
            return dig(val, target);
        }
    }, undefined);
}

// Examples
const data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    }
};
console.log(dig(data, 'level3')); // 'some data'
console.log(dig(data, 'level4')); // undefined