import css from "./MovieCard.module.css";

export default function MovieCard({
  item: { title, poster_path, overview, genres = [] },
}) {
  const defaultImg =
    "<https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster>";

  return (
    <div className={css.movieCard}>
      <img
        className={css.moviePoster}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        alt={title}
      />
      <div className={css.movieInfo}>
        <h2 className={css.movieTitle}>{title}</h2>
        <p className={css.movieGenres}>
          {genres.length > 0 && genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className={css.movieOverview}>{overview}</p>
      </div>
    </div>
  );
}
