import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movie-api";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    setError(false);
    async function fetchReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);
  return (
    <div>
      <MovieReviewsList reviews={reviews} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
