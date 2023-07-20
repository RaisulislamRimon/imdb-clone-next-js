import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <div>
        <Link href={`/movie/${result.id}`}>
          {/* {result.id} */}
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result?.backdrop_path || result?.poster_path
            }`}
            width={500}
            height={300}
            className="sm:rounded-t-lg hover:opacity-80 dark:hover:opacity-80 transition-opacity duration-200"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Poster/image is not found/available"
          />

          <div className="p-2">
            {/* <p className="line-clamp-1">
              <u>
                <strong>{result?.title}</strong>
              </u>
            </p> */}
            {/* <h1>
              <strong>Title:</strong>
            </h1> */}
            {/* <p className="text-justify"> */}
            <p className="line-clamp-2 text-md">
              {/* <strong>Overview:</strong>{" "} */}
              {/* {result?.overview && result?.overview?.slice(0, 150) + "..."} */}
              {result?.overview}
            </p>
            <h2 className={`truncate text-lg font-bold`} title={result?.title}>
              {result?.title || result.name}
            </h2>
            <p className="flex items-center">
              {result?.release_date || result?.first_aired_date}
              <FiThumbsUp className="h-5 ml-3 mr-1" />
              {result?.vote_count}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
