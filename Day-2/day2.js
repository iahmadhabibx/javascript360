const numbers = [1,3,5,4,2,6,3,4,6,3,4,3,5,3,6];

const removeDuplicates = (_array) => {
    return Array.from(new Set(_array));
};

console.log(removeDuplicates(numbers));