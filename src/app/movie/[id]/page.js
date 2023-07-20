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
      </div>
    </div>
  );
}
