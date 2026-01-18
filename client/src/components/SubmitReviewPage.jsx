//TODO: Set up a form to collect data
import { useEffect, useState } from "react";
import SingleReviewItem from "./SingleReviewItem";
import ReviewForm from "./ReviewForm";

export default function SubmitReviewPage() {
  const [reviewItems, setReviewItems] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      const reviewsResponse = await fetch(
        "https://week-07-assignment-ggd2.onrender.com/games",
      );
      const loadReviewData = await reviewsResponse.json();
      console.log(loadReviewData);
      setReviewItems(loadReviewData);
    }
    fetchReviews();
  }, []);

  return (
    <>
      <div className="submit_rev_page_div">
        <h2>Submit your own review</h2>
        <ReviewForm />
      </div>
      <div className="reviews_div">
        {reviewItems.map((reviewItem) => (
          <SingleReviewItem
            author={reviewItem.author}
            revContent={reviewItem.review_content}
            score={reviewItem.score}
            gameId={reviewItem.review_target}
          />
        ))}
      </div>
    </>
  );
}
