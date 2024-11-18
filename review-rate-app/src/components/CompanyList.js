
import React from "react";
import CompanyCard from "./CompanyCard";

function CompanyList({ companies, onAddReview }) {
  return (
    <div className="company-list">
      {companies.map((company, index) => (
        <CompanyCard
          key={index}
          company={company}
          companyIndex={index}
          onAddReview={onAddReview}
        />
      ))}
    </div>
  );
}

export default CompanyList;
