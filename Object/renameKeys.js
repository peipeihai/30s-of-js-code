const renameKeys = (keysMap, obj) => {
    return Object.keys(obj).reduce((acc, k) => {
        acc[keysMap[k] || k] = obj[k];
        return acc;
    }, {});
};

// Examples
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
const newObj = renameKeys({ name: 'firstName', job: 'passion', hobby: 'swimming' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
console.log(newObj);