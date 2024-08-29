export async function getMovies() {
  // API doesn't provide the possibility to get all movies at once
 
  const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=Avengers`);
  const datas = await response.json();

  return datas;
};