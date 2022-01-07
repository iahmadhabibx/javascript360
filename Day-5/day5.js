const categories = [
    {
        id: 1, children: [
            { id: 2, children: [], title: "Beauty soap" }, { id: 3, children: [], title: "Hand wash" }
        ], title: "Soap"
    },
    { id: 4, children: [], title: "Sunglasses" },
    {
        id: 5, children: [
            {
                id: 6, children: [
                    { id: 7, children: [], title: "A4 Paper" }, { id: 8, children: [], title: "A3 Paper" }
                ], title: "Paper"
            }
        ], title: "Wood"
    }
];

let result;

function findCategoryById(id, categoriesToSearch) {
    categoriesToSearch.forEach(category => {
        if (category.id === id)
            result =category;
        else if (category.children.length)
            findCategoryById(id, category.children);
    });
}

findCategoryById(7, categories);
console.log(result);