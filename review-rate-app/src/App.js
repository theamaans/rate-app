
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCompany, setNewCompany] = useState({
    name: "",
    city: "",
    reviews: 0,
    rating: 0,
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [newReview, setNewReview] = useState({
    name: "",
    subject: "",
    rating: 0,
  });

  // Fetch companies from backend (with fallback)
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:5000/companies");
      if (!response.ok) throw new Error("Failed to fetch data from backend");

      const data = await response.json();
      setCompanies(data);
      setFilteredCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
      const dummyCompanies = [
        {
          id: 1,
          name: "Graffersid Web and App Development",
          city: "Indore",
          reviews: 41,
          rating: 4.5,
        },
        {
          id: 2,
          name: "Code Tech Company",
          city: "Indore",
          reviews: 25,
          rating: 4.2,
        },
        {
          id: 3,
          name: "Innogent Pvt. Ltd.",
          city: "Indore",
          reviews: 30,
          rating: 4.7,
        },
        {
          id: 4,
          name: "Pixel Web and App Development",
          city: "Indore",
          reviews: 35,
          rating: 4.3,
        },
      ];
      setCompanies(dummyCompanies);
      setFilteredCompanies(dummyCompanies);
    }
  };

  // Handle Search
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(term)
    );
    setFilteredCompanies(filtered);
  };

  // Add a new company
  const handleAddCompany = () => {
    if (!newCompany.name || !newCompany.city) {
      alert("Please provide valid company details.");
      return;
    }

    const updatedCompanies = [
      ...companies,
      { id: companies.length + 1, ...newCompany },
    ];
    setCompanies(updatedCompanies);
    setFilteredCompanies(updatedCompanies);
    setNewCompany({ name: "", city: "", reviews: 0, rating: 0 });
  };

  // Add a review to a company
  const handleAddReview = () => {
    if (!newReview.name || !newReview.subject || !newReview.rating) {
      alert("Please provide valid review details.");
      return;
    }

    const updatedCompanies = companies.map((company) =>
      company.id === selectedCompany.id
        ? {
            ...company,
            reviews: company.reviews + 1,
            rating: (
              (company.rating * company.reviews +
                parseFloat(newReview.rating)) /
              (company.reviews + 1)
            ).toFixed(1),
          }
        : company
    );
    setCompanies(updatedCompanies);
    setFilteredCompanies(updatedCompanies);
    setNewReview({ name: "", subject: "", rating: 0 });
    setSelectedCompany(null); // Deselect the company
  };

  return (
    <div>
      <header>
        <h1>Review & Rate</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Find Company..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>

      <main>
        <section className="add-section">
          <h2>Add a New Company</h2>
          <input
            type="text"
            placeholder="Company Name"
            value={newCompany.name}
            onChange={(e) =>
              setNewCompany({ ...newCompany, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            value={newCompany.city}
            onChange={(e) =>
              setNewCompany({ ...newCompany, city: e.target.value })
            }
          />
          <button onClick={handleAddCompany}>Add Company</button>
        </section>

        <section className="company-list">
          {filteredCompanies.map((company) => (
            <div className="company-card" key={company.id}>
              <h3>{company.name}</h3>
              <p>
                <strong>City:</strong> {company.city}
              </p>
              <p>
                <strong>Reviews:</strong> {company.reviews}
              </p>
              <p>
                <strong>Rating:</strong> {company.rating} ⭐
              </p>
              <button onClick={() => setSelectedCompany(company)}>
                Add Review
              </button>
            </div>
          ))}
        </section>

        {selectedCompany && (
          <section className="review-section">
            <h2>Add a Review for {selectedCompany.name}</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Review Subject"
              value={newReview.subject}
              onChange={(e) =>
                setNewReview({ ...newReview, subject: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Rating (1-5)"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: e.target.value })
              }
              max="5"
              min="1"
            />
            <button onClick={handleAddReview}>Submit Review</button>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
