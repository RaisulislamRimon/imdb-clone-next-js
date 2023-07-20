export default function Movie({ params }) {
  const movieId = params?.id;
  console.log(movieId);
  return (
    <div>
      <h1>Movie page title</h1>
    </div>
  );
}
