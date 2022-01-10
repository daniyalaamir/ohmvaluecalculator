import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import _ from "lodash";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  
  const logoutHandler = async () => {
    try {
      await logout();
      history.push('/auth')
    } catch(err) {
      console.error('Failed to log out')
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
