type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

test("movie object has correct type", () => {
  const movie: Movie = {
    Title: "Spider-Man",
    Year: "2002",
    imdbID: "tt0145487",
    Type: "movie",
    Poster: "https://example.com/spiderman.jpg",
  };

  expect(typeof movie.Title).toBe("string");
  expect(typeof movie.Year).toBe("string");
  expect(typeof movie.imdbID).toBe("string");
  expect(typeof movie.Type).toBe("string");
  expect(typeof movie.Poster).toBe("string");
});

export {};
