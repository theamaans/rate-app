import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Review & Rate</h1>
      <div className="header-actions">
        <input type="text" placeholder="Search..." />
        <button>SignUp</button>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
