export default function MovieReviewsList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.author}</h2>
          <p>Rating: {review.author_details.rating}</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}
