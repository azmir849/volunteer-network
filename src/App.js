import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <LandingPage></LandingPage>
        </Route>
          <Route path="/home">
            <LandingPage></LandingPage>
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
