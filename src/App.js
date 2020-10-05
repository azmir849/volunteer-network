import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import LogInPage from './Components/LogInPage/LogInPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';

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
            <Route path="/login">
             <LogInPage></LogInPage>
            </Route>
              <Route path="/register">
              <RegisterPage></RegisterPage>
              </Route>
      </Switch>
    </Router>
  );
}

export default App;
