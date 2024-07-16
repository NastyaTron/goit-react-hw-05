import css from "./MovieCastList.module.css";

export default function MovieCastList({ items }) {
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <img
            className={css.profile}
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : defaultImg
            }
            alt={item.name}
          />
          <h3 className={css.actor}>{item.original_name}</h3>
          <p className={css.text}>Popularity: {item.popularity}</p>
        </li>
      ))}
    </ul>
  );
}
