
import './App.css';
import React from "react";
import Portafolio from './pages/Portafolio';
import Error from './pages/Error404';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/portafolio">
        <Portafolio/>
  
      </Route>
      <Route path="*">
          <Error/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
