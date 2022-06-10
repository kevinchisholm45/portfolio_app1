import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Awards from './Awards';

const pages = ({ user }) => {
  return (
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Link to ="/portfolio_app1"/>
      </BrowserRouter>
      <Routes>
        <Route exact path="/portfolio_app1/">
          <Me user={user} />
        </Route>
        <Route path="/portfolio_app1/projects">
          <Projects user={user} />
        </Route>
        <Route path="/portfolio_app1/work">
          <Work user={user} />
        </Route>
        <Route path="/portfolio_app1/education">
          <Education user={user} />
        </Route>
        <Route path="/portfolio_app1/awards">
          <Awards user={user} />
        </Route>
      </Routes>
    </Router>
  );
};

export default pages;