function debounce(func, delay) {
    let timeoutId;

    return (...args) => new Promise((resolve) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
            const result = await func(...args);
            resolve(result);
        }, delay);
    });
}

function fetchData(query) {
    return new Promise((resolve) => {
        // Simulating asynchronous data fetching (e.g., API call)
        setTimeout(() => {
            resolve(`Data fetched for query: ${query}`);
        }, 1000);
    });
}

const debouncedFetchData = debounce(fetchData, 500);

(async () => {
    const result1 = await debouncedFetchData("search term 1");
    console.log(result1);

    const result2 = await debouncedFetchData("search term 2");
    console.log(result2);

    // This call will replace the previous one, and data will be fetched only once
    const result3 = await debouncedFetchData("search term 3");
    console.log(result3);
})();
