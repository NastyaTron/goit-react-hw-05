import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../movie-api";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(movieId);
        setMovies(data);
      } catch (error) {
        console.log("Error");
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <h2>MovieDetailsPage</h2>
      {movie && <MovieCard {...movie} />}
    </div>
  );
}
