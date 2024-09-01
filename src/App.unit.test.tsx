import { movie } from "./types/movie";

test("movie object has correct type", () => {
  const movies: movie = {
    Title: "Spider-Man",
    Year: "2002",
    Genre: "Action, Adventure",
    Director: "Sam Raimi",
    Plot: "movie",
    Poster: "https://example.com/spiderman.jpg",
  };

  expect(typeof movies.Title).toBe("string");
  expect(typeof movies.Year).toBe("string");
  expect(typeof movies.Genre).toBe("string");
  expect(typeof movies.Director).toBe("string");
  expect(typeof movies.Plot).toBe("string");
  expect(typeof movies.Poster).toBe("string");
});

export {};
