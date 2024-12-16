import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">ASHA Portal</div>
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/childbirths">View Childbirths</Link></li>
          <li><Link to="/add-childbirth">Add Childbirth</Link></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
