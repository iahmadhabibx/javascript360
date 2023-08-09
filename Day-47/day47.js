function memoize(func) {
    const cache = new Map();

    return function (...args) {
        const key = args.toString();

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Output: 55 (Memoized)
console.log(memoizedFibonacci(15)); // Output: 610 (Memoized)
console.log(memoizedFibonacci(10)); // Output: 55 (Retrieved from cache)
