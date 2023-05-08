import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
