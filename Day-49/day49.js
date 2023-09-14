const findMostFrequent = (arr) => {
    // Use reduce to create a frequency map
    const frequencyMap = arr.reduce((map, item) => {
        map[item] = (map[item] || 0) + 1;
        return map;
    }, {});

    // Find the item with the highest frequency
    let mostFrequentItem;
    let highestFrequency = 0;

    for (const item in frequencyMap) {
        if (frequencyMap[item] > highestFrequency) {
            mostFrequentItem = item;
            highestFrequency = frequencyMap[item];
        }
    }

    return mostFrequentItem;
};

// Example usage:
const data = [1, 2, 3, 2, 2, 3, 4, 4, 2, 2, 5, 5, 5, 5];
const mostFrequent = findMostFrequent(data);
console.log(`The most frequent item is: ${mostFrequent}`); //The most frequent item is: 2
