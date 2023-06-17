import Card from "./Card";

export default function Results({ results }) {
  // console.log(results?.length);
  return (
    <div>
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
