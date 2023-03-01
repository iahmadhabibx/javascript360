onmessage = function (message) {
    let sum = 0;
    for (let index = 0; index < 10000000000; index++) sum += index;
    poatMessage(sum);
}