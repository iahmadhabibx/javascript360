const getProduct = (prodId) => {
    return fetch(`https://dummyjson.com/products/${prodId}`);
};


const onGettingUsers = async () => {
    let userIds = [1, 2, 3, 4, 5];

    for (const iterator of userIds) {
        let data = await getProduct(iterator);
        let results = await data.json();
        console.log(`Data for user with ID: ${iterator}: ${results}`);
    }
}

onGettingUsers();

/*

Data for user with ID: 1: [object Object]
Data for user with ID: 2: [object Object]
Data for user with ID: 3: [object Object]
Data for user with ID: 4: [object Object]
Data for user with ID: 5: [object Object]

*/