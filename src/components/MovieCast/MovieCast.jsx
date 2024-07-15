import { useEffect, useState } from "react";
import { getMovieCast } from "../../movie-api";
import { useParams } from "react-router-dom";
import MovieCastList from "../MovieCastList/MovieCastList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    setError(false);
    async function fetchCast() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);
  return (
    <div>
      <MovieCastList items={cast} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
