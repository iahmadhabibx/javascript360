const testArray1 = [1, 2, 3, 6, 7, 5, 4, 5, 32, 5, 4, 2, 23, 4, 5, 2, 5, 6, 34, 2, 4, 6, 3, 32];
const testArray2 = [1, 2, 3, 6, 7, 5, 4, 32, 23, 34];
const testArray3 = ['John', 'Doe', 3, 6, 7, 5, true, 32, 23, 34, true];
const testArray4 = ['John', 'Doe', 3, 6, 7, 5, true, 32, 23, 34];

const nonUniqueArray = (_array) => {
    let obj = {};
    let copyElements = false;
    _array.forEach(el => {
        if (obj[el])
            copyElements = true;
        else
            obj[el] = el;
    });

   return copyElements;
};

console.log(nonUniqueArray(testArray1)); //Returns true
console.log(nonUniqueArray(testArray2)); //Returns false
console.log(nonUniqueArray(testArray3)); //Returns true
console.log(nonUniqueArray(testArray4)); //Returns false