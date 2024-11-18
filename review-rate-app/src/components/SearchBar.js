import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <select>
        <option>Indore, Madhya Pradesh, India</option>
        {/* Add more city options here */}
      </select>
      <button>Find Company</button>
      <button>Add Company</button>
    </div>
  );
}

export default SearchBar;
