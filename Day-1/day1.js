const users = [{
    id: 1,
    name: "John",
    age: 32
  },
  {
    id: 2,
    name: "Doe",
    age: 21
  },
  {
    id: 3,
    name: "John",
    age: 38
  }
];


const findUser = (id) => {
    const filteredUser = users.find(u => u.id === id);
    if (filteredUser)
        return filteredUser
    else
        return "No results found"
}

console.log(findUser(2));