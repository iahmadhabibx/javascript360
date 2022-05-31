/* -------- To work with browser -------- */

let start = performance.now();

for (let i = 0; i < 100; i++) {
    // Loop work here
}

let end = performance.now()
console.log(`Performance at start: ${start}`); //Performance at start: 176618.09999999404
console.log(`Performance at end: ${end}`); //Performance at end: 176620.59999999404


/* -------- To work with NodeJS -------- */
const { performance } = require('perf_hooks');
const t0 = performance.now();

for (let i = 0; i < 100; i++) {
    // Loop work here
}

const t1 = performance.now();
console.log(`Performance start from terminal: ${t0}`); // Performance at start: 44.63807901740074
 console.log(`Performance end from terminal: ${t1}`); // Performance end from terminal: 44.65554901957512