import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="nav-container">
    <div className="topnav">
      <div className="topnav-left">
        <Link to='/home' id="nav-title" className="navbar-links">Alwaysnote</Link>
        <br />
        <a href='https://github.com/woahwinzeler' id="github-link" className="navbar-links"> Github</a>
      </div>
      <div className="topnav-right">
        <Link to="/login" className="navbar-links">
          Log In
        </Link>
      </div>
    </div>
  </header>
)
export default Navbar;