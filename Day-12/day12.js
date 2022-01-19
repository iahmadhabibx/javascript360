let a = "Ahmad";
let b = "Habib";
[a,b] = [b,a];

console.log(a,b) // "Habib" "Ahmad"


/* Works for numbers only  */
let x = 1;
let y = 9;

x = x + y;
y = x - y;
x = x - y;
console.log(x,y) // 9, 1

x = x^y;
y = x^y;
x = x^y;
console.log(x,y) // 1, 9