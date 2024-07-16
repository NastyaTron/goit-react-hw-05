import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesWithQuery } from "../../movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(false);
    async function fetchMovies() {
      try {
        const data = await fetchMoviesWithQuery();
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div className={css.container}>
      <h1 className={css.movieTitle}>Trending today</h1>

      {movie.length > 0 && <MovieList items={movie} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
