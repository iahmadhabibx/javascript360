const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

const items = [
    { name: "John", age: 26 },
    { name: "Xavier", age: 34 },
    { name: "Venessa", age: 21 },
    { name: "Brian", age: 24 },
]

console.log(sortBy(items, "age"));
/*
[
  { name: 'Venessa', age: 21 },
  { name: 'Brian', age: 24 },
  { name: 'John', age: 26 },
  { name: 'Xavier', age: 34 }
]
*/