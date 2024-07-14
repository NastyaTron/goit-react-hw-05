import { Link } from "react-router-dom";

export default function MovieList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
