export default function SingleReviewItem({
  author,
  revContent,
  score,
  gameId,
}) {
  return (
    <>
      <figure>
        <h3>
          {gameId} review by {author}
        </h3>
        <p>{revContent}</p>
        <h3>Awarded a score of: {score}</h3>
      </figure>
    </>
  );
}
