function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
function expensiveTask(input) {
    console.log(`Performing expensive task with input: ${input}`);
}

const debouncedExpensiveTask = debounce(expensiveTask, 500);

debouncedExpensiveTask("A"); // This call will wait for 500ms
debouncedExpensiveTask("B"); // This call will replace the previous one and also wait for 500ms
debouncedExpensiveTask("C"); // This call will replace the previous one and also wait for 500ms
