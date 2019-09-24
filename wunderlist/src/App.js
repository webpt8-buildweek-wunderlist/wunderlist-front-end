import React from 'react';
import SignUp from './components/Sign_up';
import Login from './components/Login';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import {Route} from "react-router-dom";
import Search from "./components/Search";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <PrivateRoute path = "/user" component = {Header} />
       <PrivateRoute path = "/user" component = {NavBar} />
       <PrivateRoute path = "/user" component = {Search} />
       <h1>Wunderlist</h1>
       {/* <Route exact path='/' component={HomePage} /> */}
       <Route exact path='/login' component={Login} />
       <Route exact path='/signup' component={SignUp} />
       <Route exact path='/calendar' component={Calendar} />
      </header>
    </div>
  );
}

export default App;
