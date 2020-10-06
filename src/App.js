import React, { createContext, useState } from 'react';
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
import EventPage from './Components/EventPage/EventPage';
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
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
                <Route path="/event">
                 <EventPage></EventPage>
                </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
