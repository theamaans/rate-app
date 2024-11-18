

import React, { useState } from "react";
import AddReview from "./AddReview";

function CompanyCard({ company, companyIndex, onAddReview }) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="company-card">
      <h3>{company.name}</h3>
      <p>Location: {company.location}</p>
      <p>Founded: {company.founded}</p>
      <p>{company.description}</p>
      <button onClick={() => setShowReviewForm(!showReviewForm)}>
        {showReviewForm ? "Close Review Form" : "Add Review"}
      </button>
      {showReviewForm && (
        <AddReview
          onAddReview={(review) => onAddReview(companyIndex, review)}
        />
      )}
      <h4>Reviews:</h4>
      {company.reviews.length > 0 ? (
        company.reviews.map((review, index) => (
          <div key={index}>
            <h5>{review.subject}</h5>
            <p>{review.text}</p>
            <p>Rating: {review.rating}/5</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

export default CompanyCard;
