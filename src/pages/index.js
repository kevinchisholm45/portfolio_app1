import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Awards from './Awards';

const pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/portfolio_app1/" element={<Me user={user} />} />
        <Route path="/portfolio_app1/projects" element={<Projects user={user} />} />
        <Route path="/portfolio_app1/work" element={<Work user={user} />} />
        <Route path="/portfolio_app1/education" element={<Education user={user} />} />
        <Route path="/portfolio_app1/awards" element={<Awards user={user} />} />
      </Routes>
    </Router>
  );
};

export default pages;