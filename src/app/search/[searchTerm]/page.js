import Results from "@/components/Results";

export default async function search({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Error in data fetching");
  }
  const data = await res.json();
  const result = data?.results;
  return (
    <div>
      {/* <h1>Search</h1> */}
      {result && result.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {result && <Results results={result} />}
    </div>
  );
}
