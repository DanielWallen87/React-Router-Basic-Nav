import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
