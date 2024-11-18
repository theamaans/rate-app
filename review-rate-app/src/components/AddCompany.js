
import React, { useState } from "react";

function AddCompany({ onAddCompany }) {
  const [company, setCompany] = useState({
    name: "",
    location: "",
    founded: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCompany(company);
    setCompany({ name: "", location: "", founded: "", description: "" });
  };

  return (
    <div className="add-company">
      <h2>Add Company</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={company.name}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          name="location"
          value={company.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <input
          name="founded"
          type="date"
          value={company.founded}
          onChange={handleChange}
          placeholder="Founded Date"
          required
        />
        <textarea
          name="description"
          value={company.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
}

export default AddCompany;
