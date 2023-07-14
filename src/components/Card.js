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
            // alt={result.title || result.original_name}
            className="sm:rounded-t-lg hover:opacity-80 dark:hover:opacity-80 transition-opacity duration-200"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          />

          <div className="p-2">
            <p>
              <u>
                <strong>{result.title}</strong>
              </u>
            </p>
            <h1>
              <strong>Title:</strong>
            </h1>
            <p className="text-justify">
              <strong>Overview:</strong>{" "}
              {result?.overview && result?.overview?.slice(0, 150) + "..."}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
