import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="nav-container">
    <div className="topnav">
      <div className="topnav-left">
        <Link to='/home' id="nav-title">Alwaysnote</Link>
        <br />
        <a href='https://github.com/woahwinzeler' id="github-link"> Github</a>
      </div>
      <div className="topnav-right">
        <Link to="/login">
          Log In
        </Link>
      </div>
    </div>
  </header>
)
export default Navbar;