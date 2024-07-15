export default function MovieCard({
  item: { title, poster_path, overview, genres = [] },
}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{genres.length > 0 && genres.map((genre) => genre.name).join(", ")}</p>
      <p>{overview}</p>
    </div>
  );
}
