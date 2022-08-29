const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , , ...updatedNumbers] = numbers;

console.log("Numbers: ", numbers);
console.log("Updated Numbers: ", updatedNumbers);

/*
 ***** OUTPUT ***** 
 Numbers:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Updated Numbers:  [
  4, 5,  6, 7,
  8, 9, 10
]
 */