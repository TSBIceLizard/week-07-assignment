import { useState } from "react";

export default function ReviewForm() {
  const [formValues, setFormValues] = useState({
    author: "",
    reviewContent: "",
    score: 0,
    reviewTarget: null,
  });

  const reviewForm = document.getElementById("review_form");

  function handleReviewSubmit(event) {
    event.preventDefault();
    const formDataReviewTemplate = new FormData(reviewForm);
    setFormValues(Object.formEntries(formDataReviewTemplate));
    fetch("https://week-07-assignment-ggd2.onrender.com/reviewssubmit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formValues }),
    });
  }
  return (
    <>
      <div>
        <form onSubmit={handleReviewSubmit} id="review_form">
          <fieldset>
            <legend>Your alias/nickname</legend>
            <label for="author">What would you like to call yourself:</label>
            <input type="text" name="author" required />
          </fieldset>
          <fieldset>
            <legend>Your review</legend>
            <label for="reviewcontent">Your thoughts on this title:</label>
            <input type="text" name="reviewcontent" required />
          </fieldset>
          <fieldset>
            <legend>Your rating</legend>
            <label for="score">Give your overall score:</label>
            <input type="number" name="score" required min="0" max="5" />
          </fieldset>
          <fieldset>
            <legend>For</legend>
            <label for="reviewtarget">The game you are reviewing:</label>
            <select id="gametarget" name="reviewtarget" required>
              <option value="1">Doom 3</option>
              <option value="2">Diablo 2</option>
            </select>
          </fieldset>
          <button type="submit">Submit your review</button>
        </form>
      </div>
    </>
  );
}
