import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movie-api";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
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
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && reviews.length === 0 && (
        <p className={css.text}>There are no reviews for this movie.</p>
      )}
      {!loading && !error && reviews.length > 0 && (
        <MovieReviewsList reviews={reviews} />
      )}
    </div>
  );
}
