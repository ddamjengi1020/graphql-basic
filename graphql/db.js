export const person = [
  {
    id: 1,
    name: "hello",
    age: 1,
  },
  {
    id: 2,
    name: "my",
    age: 2,
  },
  {
    id: 3,
    name: "name",
    age: 3,
  },
  {
    id: 4,
    name: "is",
    age: 4,
  },
  {
    id: 5,
    name: "juno",
    age: 5,
  },
];

export const getById = (id) => {
  const getIdByPerson = person.filter((p) => p.id === id);
  return getIdByPerson[0];
};
