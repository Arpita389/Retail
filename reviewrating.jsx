import React, { useState, useEffect } from "react";

const backgroundStyle = {
  backgroundImage:
    "url('https://i.pinimg.com/originals/5d/e0/8d/5de08de24459fedac3d28b10a039e2a6.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const reviewContainerStyle = {
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "10px",
  maxWidth: "600px",
  width: "90%",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
};

const reviewCardStyle = {
  display: "flex",
  alignItems: "center",
  padding: "15px",
  borderRadius: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

const reviewContentStyle = {
  flex: 1,
  marginLeft: "15px",
};

const deleteButtonStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "3px",
  cursor: "pointer",
  marginTop: "5px",
};

function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((review, i) => i !== index);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
  };

  return (
    <div style={backgroundStyle}>
      <div style={reviewContainerStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize:"30px" }}>Reviews and Rating</h1>
        {reviews.map((review, index) => (
          <div key={index} style={reviewCardStyle}>
            {review.imgsrc && (
              <img
                src={review.imgsrc}
                alt={review.title}
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
            )}
            <div style={reviewContentStyle}>
              <p>Product: {review.title}</p>
              <p>Rating: {review.rating}</p>
              <p>Review: {review.review}</p>
              <button
                onClick={() => handleDeleteReview(index)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
