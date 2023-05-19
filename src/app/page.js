import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// async function getData({ searchParams }) {
// const genre = searchParams.genre || "fetchTrending";
// const res = await fetch(
//   `https://api.themoviedb.org/3/
// ${
//   genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
// }?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
//   { next: { revalidate: 10 } }
// );
//   return res.json();
// }

export default async function Home({ searchParams }) {
  // const data = getData();
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/
  ${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );
  // return res.json();
  const data = res.json();
  // return data;
  // const

  return (
    <main>
      <h1>Home</h1>
      {data?.length}
    </main>
  );
}
