//TODO: Set up a form to collect data
import ReviewForm from "./ReviewForm";

export default function SubmitReviewPage() {
  return (
    <>
      <div className="submit_rev_page_div">
        <h2>Submit your own review</h2>
        <ReviewForm />
      </div>
    </>
  );
}
