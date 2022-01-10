import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
