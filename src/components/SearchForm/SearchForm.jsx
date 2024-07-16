import { useState } from "react";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const [movie, setMovie] = useState("");

  const onChange = (event) => {
    setMovie(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!movie) {
      alert("Not found film");
      return;
    }
    onSubmit(movie);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <input
          className={css.input}
          type="text"
          name="name"
          required
          placeholder="Search movies..."
          value={movie}
          onChange={onChange}
        />
      </label>
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}
