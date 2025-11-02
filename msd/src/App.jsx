import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Shelter from './Shelter';
import Home from './Home';
import Register from './Register';
import SOS from './SOS';
import ThreatAlert from './ThreatAlert';
import Login from './Login';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/threat-alert" element={<ThreatAlert />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;