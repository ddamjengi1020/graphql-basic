import { person, getById } from "./db";

export const resolvers = {
  Query: {
    people: () => person,
    person: (_, { id }) => getById(id),
  },
};
