let numbers = [9,2,7,24,75,856,24,23,753,739,842,975,335,235,73,146,1,45,256,217];

//Find largest number in an array
let max = Math.max.apply(Math, numbers);
console.log(max) //975

//Find the smallest number in an array
let min = Math.min.apply(Math, numbers);
console.log(min) //1