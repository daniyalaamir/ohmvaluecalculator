import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { signup, login } = useAuth();
  const [error, setError] = useState(null);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if(isLogin) {
      try {
        setError('');
        await login(email, password);
        history.push('/dashboard')
      } catch(error) {
        setError('Failed to log in');
      }
    } else {
      try {
        setError('');
        await signup(email, password);
        setIsLogin(true);
      } catch(error) {
        setError('Failed to create an account');    
      }
    }
  }

  return (
    <section className="auth">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {error && error}
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className="control">
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className="actions">
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
