"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);
    if (!search) return;
    router.push(`/search/${search}`);

    const handleClear = (e) => {
      console.log(e);
      console.log("handleClear");
    };
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      {" "}
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <button
          onClick={(e) => {
            console.log(e);
            console.log(e.target);
            console.log(e.target.value);
            handleClear(e.target.value);
          }}
          className="mr-2 text-red-500"
        >
          Clear{" "}
        </button> */}
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
