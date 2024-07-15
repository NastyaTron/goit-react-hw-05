export default function MovieCastList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
          />
          <h2>{item.original_name}</h2>
          <p>Popularity: {item.popularity}</p>
        </li>
      ))}
    </ul>
  );
}
