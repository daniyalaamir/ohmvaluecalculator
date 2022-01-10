import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from './components/Common/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/' component={HomePage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
