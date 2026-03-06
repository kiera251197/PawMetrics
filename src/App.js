import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderImg from './PawMetrics Dog Landing.png';
import PawMetricsLogoLong from './Paw Metrics cyan.png';
import Dashboard from './Dashboard';
import Compare from './Compare';
import Timeline from './Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Footer />
    </div>
  );
}

export default App;
