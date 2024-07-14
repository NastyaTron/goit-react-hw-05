import MovieCard from "../MovieCard/MovieCard";

export default function MovieList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <MovieCard item={item} />
        </li>
      ))}
    </ul>
  );
}
