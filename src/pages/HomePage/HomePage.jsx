import { useEffect, useState } from "react";
import MovieLinkList from "../../components/MovieLinkList/MovieLinkList";
import { fetchMoviesWithQuery } from "../../movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
    <div>
      <h1>Trending today</h1>

      {movie.length > 0 && <MovieLinkList items={movie} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
