import css from "./MovieReviewsList.module.css";
export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li className={css.item} key={review.id}>
          <h3 className={css.title}>{review.author}</h3>
          <p className={css.rating}>Rating: {review.author_details.rating}</p>
          <p className={css.text}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
