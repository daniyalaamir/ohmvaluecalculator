import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </>
  );
}

export default App;
