import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import _ from "lodash";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const logoutHandler = async () => {
    setError('');
    try {
      await logout();
      navigate('/auth')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <header className="header">
      <Link to='/'>
        <div className="logo">OhmValueCalculator</div>
      </Link>
      <nav>
        <ul>
          <li>
            
            {_.isEmpty(currentUser) ? (
              <Link to='/auth'>Sign In</Link>
            ) : (
              <button onClick={logoutHandler}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
