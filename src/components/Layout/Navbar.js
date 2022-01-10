import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <Link to='/'>
        <div className="logo">OhmValueCalculator</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Create Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
