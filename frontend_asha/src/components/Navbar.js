import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#007BFF", color: "white" }}>
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
      <Link to="/add-child-birth" style={{ color: "white", textDecoration: "none" }}>Add Child Birth</Link>
      <Link to="/view-child-births" style={{ color: "white", textDecoration: "none" }}>View Child Births</Link>
      <button onClick={handleLogout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
