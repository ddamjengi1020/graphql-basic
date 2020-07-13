let movies = [
  {
    id: 1,
    name: "로건",
    score: 5,
  },
  {
    id: 2,
    name: "#살아있다",
    score: 2.5,
  },
  {
    id: 3,
    name: "반도",
    score: 8,
  },
  {
    id: 4,
    name: "부산행",
    score: 1.2,
  },
  {
    id: 5,
    name: "노트북",
    score: 10,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const getIdByMovies = movies.filter((movie) => movie.id === id);
  return getIdByMovies[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
