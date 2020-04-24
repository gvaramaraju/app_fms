import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header'
import './components/header/header.css'
import Login from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home';
import { AuthContext } from './context/auth';
import Logout from './components/logout/logout';
import Admin from './components/admin/admin-root/admin';
import Signup from './components/signup/signup';

function App() {
  // const existingToken = JSON.parse(localStorage.getItem("token"));
  // const existingTokenAuthorities = JSON.parse(localStorage.getItem("tokenAuthorities"))
  const [existingToken, setExistingToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [existingTokenAuthorities, setExistingTokenAuthorities] = useState(JSON.parse(localStorage.getItem("tokenAuthorities")))
  const [authToken, setAuthToken] = useState(existingToken);
  const [authTokenAuthorities, setAuthTokenAuthorities] = useState(existingTokenAuthorities);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const saveAuthToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setAuthToken(token);
  }

  const saveAuthTokenAuthorities = (authorities) => {
    localStorage.setItem("tokenAuthorities", JSON.stringify(authorities));
    setAuthTokenAuthorities(authorities);
  }

  return <AuthContext.Provider value={{
    authToken, isLoggedIn, authTokenAuthorities, existingToken, existingTokenAuthorities,
    saveAuthToken, setIsLoggedIn, saveAuthTokenAuthorities, setExistingToken, setExistingTokenAuthorities, setAuthToken, setAuthTokenAuthorities
  }}>
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router >
  </AuthContext.Provider >
}

export default App;
