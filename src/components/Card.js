import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <div>
        <Link href={`/movie/${result.id}`}>
          {/* {result.id} */}
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            alt={result.title || result.original_name}
          />
          <p>{result.title}</p>
          <h1>Title</h1>
          <p>Overview</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
