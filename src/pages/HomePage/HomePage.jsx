import { useEffect, useState } from "react";
import MovieLinkList from "../../components/MovieLinkList/MovieLinkList";
import { fetchMoviesWithQuery } from "../../movie-api";

export default function HomePage() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchMoviesWithQuery();
        setMovie(data);
      } catch (error) {
        console.log(Error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieLinkList items={movie} />
    </div>
  );
}
