const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

const searchTerm = "z"


const filterUser = users.filter((user)=> user.name.toLowerCase().includes(searchTerm.toLowerCase()))

console.log(filterUser)
