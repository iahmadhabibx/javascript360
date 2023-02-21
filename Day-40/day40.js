const data = [1, 2, 3, [4], [5], [6, 7], [], 7, 8];
const flatMapped = data.flatMap(item => item);

console.log(flatMapped); //[ 1, 2, 3, 4, 5, 6, 7, 7, 8]