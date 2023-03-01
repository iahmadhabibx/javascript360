const worker = new Worker("./worker.js");
worker.postMessage()
worker.onmessage = function(message) {
    console.log("Sum: ", message?.data);
}

let interval = setInterval(() => console.log("Hi there"), 1000);