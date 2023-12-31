// const key = process.env.REACT_APP_IMDB_API_KEY;
const key = "e1e6a18a398a6e0d17c5dc4559f35339";

// API Key: e1e6a18a398a6e0d17c5dc4559f35339

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,

  requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,

  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
