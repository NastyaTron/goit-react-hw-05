export default function SearchForm() {
  const onChange = (event) => {
    console.log(event);
  };

  return (
    <form>
      <label>
        <input
          type="text"
          name="name"
          required
          placeholder="Search movies..."
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
