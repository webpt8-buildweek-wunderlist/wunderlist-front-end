import React from 'react';
import SignUp from './components/Sign_up';
import Login from './components/Login';
import './App.css';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import TheMain from "./components/Main";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
       {/* <PrivateRoute path = "/user" component = {TheMain} /> */}
        <PrivateRoute exact path = "/user" component = {Header} />
        <PrivateRoute exact path = "/user" component = {NavBar} />
        <PrivateRoute exact path = "/user" component = {Search} />
        <Route exact path='/calendar' component={Calendar} />
       
       <h1>Wunderlist</h1>
       {/* <Route exact path='/' component={HomePage} /> */}
       <Route exact path='/login' component={Login} />
       <Route exact path='/signup' component={SignUp} />
      </Switch>
      </header>
    </div>
  );
}

export default App;