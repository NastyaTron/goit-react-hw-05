import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ items }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {items.map((item) => (
        <li className={css.movieItem} key={item.id}>
          <Link
            className={css.movieLink}
            to={`/movies/${item.id}`}
            state={location}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
