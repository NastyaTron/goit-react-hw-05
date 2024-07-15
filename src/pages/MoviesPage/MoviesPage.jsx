import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { getMovies } from "../../movie-api";
import MovieLinkList from "../../components/MovieLinkList/MovieLinkList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const movie = searchParam.get("movie");
    if (!movie) return;
    setLoading(true);

    async function fetchMovies() {
      try {
        const data = await getMovies(movie);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchParam]);

  const onSubmit = (movie) => {
    setSearchParam({ movie });
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieLinkList items={movies} />
    </div>
  );
}
