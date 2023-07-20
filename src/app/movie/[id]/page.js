import Image from "next/image";

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
  // console.log(movie);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          // alt={result.title || result.original_name}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie Poster Image"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie?.title}</h2>
          <p className="font-semibold mr-1 mb-3">
            <span className="">Overview: </span>
            {movie?.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released: </span>
            {movie?.release_date || movie?.first_air_date || "Not found"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating: </span>
            {movie?.vote_count || "Not found"}
          </p>
        </div>
      </div>
    </div>
  );
}
