const TMDB_API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`);
  return res.json();
}

export async function fetchMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits,reviews,similar`);
  return res.json();
}

export async function fetchTVShows(page = 1) {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&page=${page}`);
  return res.json();
}