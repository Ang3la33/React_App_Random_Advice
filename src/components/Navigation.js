import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
    <ul className="nav-list" >
      <li><Link to="/" className="nav-button">Home</Link></li>
      <li><Link to="/random-advice" className="nav-button">Random Advice</Link></li>
      <li><Link to="/advice-list" className="nav-button">Advice List</Link></li>
    </ul>
  </nav>
  );
}

export default Navigation
