import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";

const App = () => (
  <div>
    {/* Only one navigation tag is needed -- there is no need to close it off! */}
    <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
  </div>
);

export default App;
