export default function Results({ results }) {
  // console.log(results?.length);
  return (
    <div>
      {/* <h1>Results: {results.length}</h1> */}
      {results.map((result) => (
        <div key={result.id}>
          <div>
            <h1>{result?.original_title}</h1>
            {/* <p>{result?.overview}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
