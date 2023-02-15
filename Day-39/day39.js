const strings = ["fazil", "saqib", "babar", "zaman", "ahmad", "mushtaq"];

strings.sort((a,b) => a.localeCompare(b));

console.log(strings); // [ 'ahmad', 'babar', 'fazil', 'mushtaq', 'saqib', 'zaman' ]