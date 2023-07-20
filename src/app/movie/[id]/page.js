async function getMovie(movieId) {
  // console.log(movieId);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  return await res.json();
}

export default async function Movie({ params }) {
  const movieId = params?.id;
  const movie = await getMovie(movieId);
  console.log(movie);
  return (
    <div>
      <h1>{movie?.title}</h1>
    </div>
  );
}
