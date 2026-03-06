import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../App.css'; 
import LogoVertical from '../purple logo vertical.png';
import Dashboard from '../Dashboard';
import Compare from '../Compare';
import Timeline from '../Timeline';
import DashboardIcon from '../paw-solid.png';
import CompareIcon from '../swatchbook-solid.png';
import TimelineIcon from '../chart-gantt-solid.png';

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="sidebar">
        <Link to="/"><img src={LogoVertical} id="pawmetrics-logo-vertical" alt="pawmetrics logo"/> </Link>
        <Link to="/" className='hover-underline'><img src={DashboardIcon} alt="Dashboard" />Dashboard</Link>
        <Link to="/compare" className='hover-underline'><img src={CompareIcon} alt="Comparison" />Comparison</Link>
        <Link to="/timeline" className='hover-underline'><img src={TimelineIcon} alt="Timeline" />Timeline</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;