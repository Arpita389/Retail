import React, { useState } from "react";
import RatingReviewForm from "./rating";

function RatingReviewSection({ title, imgsrc }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const handleReviewSubmit = (rating, review) => {
    const newReview = { title, imgsrc, rating, review };
    setReviews([...reviews, newReview]);
    toggleReviewForm();
  };

  return (
    <div className="rating-review-section">
      <button onClick={toggleReviewForm}>Leave a Review</button>

      {showReviewForm && <RatingReviewForm onSubmit={handleReviewSubmit} />}
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review.title}</p>
          <p>Rating: {review.rating}</p>
          <p>Review: {review.review}</p>
          {review.imgsrc && <img src={review.imgsrc} alt={review.title} style={{ maxWidth: "200px", maxHeight: "200px" }}  />}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default RatingReviewSection;
