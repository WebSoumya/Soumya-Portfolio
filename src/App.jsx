import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import SkillSet from './Pages/SkillSet'; // <-- ADD THIS IMPORT
import Education from './Pages/Education'; // <-- ADD THIS IMPORT
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skillset" element={<SkillSet />} />
        <Route path="/education" element={<Education />} /> {/* <-- ADD THIS ROUTE */}
        <Route path="/contact" element={<Contact />} /> {/* <-- ADD THIS ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;