import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './page/Contact';
import About from './page/About';
import Profile from './page/Profile.jsx';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Welcome to Home Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
