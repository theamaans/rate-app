import React, { useState } from "react";

function AddReview({ onAddReview }) {
  const [review, setReview] = useState({
    name: "",
    subject: "",
    text: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(review);
    setReview({ name: "", subject: "", text: "", rating: 5 });
  };

  return (
    <form onSubmit={handleSubmit} className="add-review">
      <input
        name="name"
        value={review.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="subject"
        value={review.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
      />
      <textarea
        name="text"
        value={review.text}
        onChange={handleChange}
        placeholder="Review Text"
        required
      />
      <input
        name="rating"
        type="number"
        value={review.rating}
        onChange={handleChange}
        min="1"
        max="5"
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default AddReview;
