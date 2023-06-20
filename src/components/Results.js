import Card from "./Card";

export default function Results({ results }) {
  // console.log(results?.length);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        // <div key={result.id}>
        //   <div>
        //     <h1>{result?.original_title}</h1>
        //     {/* <p>{result?.overview}</p> */}
        //   </div>
        // </div>

        <Card result={result} key={result.id} />
      ))}
    </div>
  );
}
