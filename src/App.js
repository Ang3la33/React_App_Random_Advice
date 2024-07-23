import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import RandomAdvice from './components/RandomAdvice';
import AdviceList from './components/AdviceList';


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-advice" element={<RandomAdvice />} />
        <Route path="/advice-list" element={<AdviceList />} />
      </Routes>
    </div>
    
  );
}

export default App;
